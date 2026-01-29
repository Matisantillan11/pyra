// Main fetcher exports
export { api, configureFetcher, fetcher, getFetcherConfig } from './fetcher';

// Types
export type {
  ApiErrorResponse,
  ApiResponse,
  FetcherArgs,
  FetcherConfig,
  HttpMethod,
  ResponseType,
} from './types';

// Errors
export {
  createErrorFromStatus,
  createFetcherError,
  createForbiddenError,
  createNetworkError,
  createNotFoundError,
  createParseError,
  createServerError,
  createUnauthorizedError,
  ErrorCode,
  isFetcherError,
} from './errors';
export type { FetcherError } from './errors';

// Events
export { clearAuthListeners, emitAuthEvent, onAuthEvent } from './events';
export type { AuthEventType } from './events';

// Constants
export { DEFAULT_BASE_URL } from './constants';
