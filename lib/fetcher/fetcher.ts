import { fetch } from 'expo/fetch';
import { DEFAULT_BASE_URL } from './constants';
import {
  createErrorFromStatus,
  createNetworkError,
  ErrorCodeValues,
  type FetcherError,
} from './errors';
import { emitAuthEvent } from './events';
import type { FetcherArgs, FetcherConfig } from './types';
import { buildEndpoint, buildHeaders, isExternalUrl, parseResponse, stringifyError } from './utils';

/**
 * Global configuration for the fetcher
 */
let config: FetcherConfig = {
  baseUrl: DEFAULT_BASE_URL,
  getToken: async () => null,
  onAuthError: undefined,
};

/**
 * Configure the fetcher with custom settings
 * Call this once at app initialization (e.g., in _layout.tsx)
 *
 * @example
 * ```ts
 * configureFetcher({
 *   baseUrl: 'https://api.example.com',
 *   getToken: async () => {
 *     const session = await AsyncStorage.getItem('session');
 *     return session ? JSON.parse(session).token : null;
 *   },
 *   onAuthError: async () => {
 *     await AsyncStorage.removeItem('session');
 *     router.replace('/login');
 *   },
 * });
 * ```
 */
export function configureFetcher(newConfig: Partial<FetcherConfig>): void {
  config = { ...config, ...newConfig };
}

/**
 * Get the current fetcher configuration
 */
export function getFetcherConfig(): Readonly<FetcherConfig> {
  return config;
}

/**
 * Handle authentication errors (401)
 * Emits auth event and calls onAuthError callback if configured
 */
async function handleAuthError(): Promise<void> {
  await emitAuthEvent('auth:error');

  if (config.onAuthError) {
    await config.onAuthError();
  }
}

/**
 * Type-safe fetch wrapper with authentication support
 *
 * @template T - The expected response type
 * @param args - Fetch arguments
 * @returns Promise resolving to the typed response data
 * @throws {FetcherError} When the request fails
 *
 * @example
 * ```ts
 * // Simple GET request
 * const users = await fetcher<User[]>({ url: '/users' });
 *
 * // POST request with body
 * const newUser = await fetcher<User>({
 *   url: '/users',
 *   init: {
 *     method: 'POST',
 *     body: JSON.stringify({ name: 'John' }),
 *   },
 * });
 *
 * // Request without authentication
 * const publicData = await fetcher<PublicData>({
 *   url: '/public',
 *   withAuthentication: false,
 * });
 *
 * // External API request
 * const weather = await fetcher<WeatherData>({
 *   url: 'https://api.weather.com/data',
 *   withAuthentication: false,
 * });
 * ```
 */
export async function fetcher<T>({
  url,
  init,
  responseType = 'json',
  withAuthentication = true,
}: FetcherArgs): Promise<T> {
  const isExternal = isExternalUrl(url);
  const endpoint = buildEndpoint(url, config.baseUrl);

  let token: string | null = null;
  if (withAuthentication && !isExternal) {
    token = await config.getToken();
  }

  const headers = await buildHeaders({
    init,
    token,
    withAuthentication,
    isExternal,
  });

  const fetchInit = {
    ...init,
    headers,
  };

  try {
    const response = await fetch(endpoint, fetchInit);

    if (!response.ok) {
      const error = createErrorFromStatus(response.status, response.statusText);

      if (error.code === ErrorCodeValues.UNAUTHORIZED) {
        await handleAuthError();
      }

      throw error;
    }

    return parseResponse<T>(response, responseType);
  } catch (error) {
    // Re-throw FetcherError as-is
    if (
      typeof error === 'object' &&
      error !== null &&
      'name' in error &&
      (error as FetcherError).name === 'FetcherError'
    ) {
      throw error;
    }

    // Network or other errors
    console.error(`Fetch error for ${endpoint}:`, stringifyError(error));
    throw createNetworkError(stringifyError(error));
  }
}

/**
 * Convenience methods for common HTTP methods
 */
export const api = {
  get: <T>(url: string, options?: Omit<FetcherArgs, 'url' | 'init'>) =>
    fetcher<T>({ url, init: { method: 'GET' }, ...options }),

  post: <T>(url: string, body?: unknown, options?: Omit<FetcherArgs, 'url' | 'init'>) =>
    fetcher<T>({
      url,
      init: { method: 'POST', body: body ? JSON.stringify(body) : undefined },
      ...options,
    }),

  put: <T>(url: string, body?: unknown, options?: Omit<FetcherArgs, 'url' | 'init'>) =>
    fetcher<T>({
      url,
      init: { method: 'PUT', body: body ? JSON.stringify(body) : undefined },
      ...options,
    }),

  patch: <T>(url: string, body?: unknown, options?: Omit<FetcherArgs, 'url' | 'init'>) =>
    fetcher<T>({
      url,
      init: { method: 'PATCH', body: body ? JSON.stringify(body) : undefined },
      ...options,
    }),

  delete: <T>(url: string, options?: Omit<FetcherArgs, 'url' | 'init'>) =>
    fetcher<T>({ url, init: { method: 'DELETE' }, ...options }),
};
