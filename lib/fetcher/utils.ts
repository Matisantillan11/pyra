import type { FetchRequestInit } from 'expo/fetch';
import { createParseError, type FetcherError } from './errors';
import type { ResponseType } from './types';

export function isExternalUrl(url: string): boolean {
  return url.startsWith('http://') || url.startsWith('https://');
}

export function buildEndpoint(url: string, baseUrl: string): string {
  if (isExternalUrl(url)) {
    return url;
  }

  const normalizedBase = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
  const normalizedPath = url.startsWith('/') ? url : `/${url}`;

  return `${normalizedBase}${normalizedPath}`;
}

export async function buildHeaders(options: {
  init?: FetchRequestInit;
  token: string | null;
  withAuthentication: boolean;
  isExternal: boolean;
}): Promise<HeadersInit> {
  const { init, token, withAuthentication, isExternal } = options;

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(init?.headers as Record<string, string>),
  };

  if (!isExternal && withAuthentication && token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  return headers;
}

export async function parseResponse<T>(response: Response, responseType: ResponseType): Promise<T> {
  try {
    switch (responseType) {
      case 'json':
        return (await response.json()) as T;
      case 'text':
        return (await response.text()) as unknown as T;
      default:
        return (await response.json()) as T;
    }
  } catch (error) {
    throw createParseError(
      `Failed to parse response as ${responseType}: ${error instanceof Error ? error.message : 'Unknown error'}`,
    );
  }
}

export function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

export function stringifyError(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }
  if (typeof error === 'string') {
    return error;
  }
  try {
    return JSON.stringify(error);
  } catch {
    return 'Unknown error';
  }
}

export function isFetcherError(error: unknown): error is FetcherError {
  return (
    isObject(error) &&
    'name' in error &&
    error.name === 'FetcherError' &&
    'code' in error &&
    'message' in error
  );
}
