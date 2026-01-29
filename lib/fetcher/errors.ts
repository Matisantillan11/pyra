export const ErrorCodeValues = Object.freeze({
  UNAUTHORIZED: 'UNAUTHORIZED',
  FORBIDDEN: 'FORBIDDEN',
  NOT_FOUND: 'NOT_FOUND',
  SERVER_ERROR: 'SERVER_ERROR',
  NETWORK_ERROR: 'NETWORK_ERROR',
  PARSE_ERROR: 'PARSE_ERROR',
  UNKNOWN: 'UNKNOWN',
});

export type ErrorCode = (typeof ErrorCodeValues)[keyof typeof ErrorCodeValues];

export type FetcherError = {
  name: 'FetcherError';
  message: string;
  status?: number;
  code: ErrorCode;
};

export function isFetcherError(error: unknown): error is FetcherError {
  return (
    typeof error === 'object' && error !== null && 'name' in error && error.name === 'FetcherError'
  );
}

export function createFetcherError(
  message: string,
  code: ErrorCode = ErrorCodeValues.UNKNOWN,
  status?: number,
): FetcherError {
  return {
    name: 'FetcherError',
    message,
    code,
    status,
  };
}

export function createUnauthorizedError(
  message = 'Unauthorized - Authentication required',
): FetcherError {
  return createFetcherError(message, ErrorCodeValues.UNAUTHORIZED, 401);
}

export function createForbiddenError(
  message = 'Forbidden - Insufficient permissions',
): FetcherError {
  return createFetcherError(message, ErrorCodeValues.FORBIDDEN, 403);
}

export function createNotFoundError(message = 'Resource not found'): FetcherError {
  return createFetcherError(message, ErrorCodeValues.NOT_FOUND, 404);
}

export function createServerError(message = 'Server error', status = 500): FetcherError {
  return createFetcherError(message, ErrorCodeValues.SERVER_ERROR, status);
}

export function createNetworkError(
  message = 'Network error - Please check your connection',
): FetcherError {
  return createFetcherError(message, ErrorCodeValues.NETWORK_ERROR);
}

export function createParseError(message = 'Failed to parse response'): FetcherError {
  return createFetcherError(message, ErrorCodeValues.PARSE_ERROR);
}

export function createErrorFromStatus(status: number, statusText: string): FetcherError {
  const message = `Request failed with status ${status}: ${statusText}`;

  if (status === 401) {
    return createUnauthorizedError(message);
  }
  if (status === 403) {
    return createForbiddenError(message);
  }
  if (status === 404) {
    return createNotFoundError(message);
  }
  if (status >= 500) {
    return createServerError(message, status);
  }

  return createFetcherError(message, ErrorCodeValues.UNKNOWN, status);
}
