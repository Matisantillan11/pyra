import type { FetchRequestInit } from 'expo/fetch';

export type ResponseType = 'json' | 'text';
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export type FetcherArgs = {
  url: string;
  init?: FetchRequestInit;
  responseType?: ResponseType;
  withAuthentication?: boolean;
};

export type FetcherConfig = {
  baseUrl: string;
  getToken: () => Promise<string | null>;
  onAuthError?: () => void | Promise<void>;
};

export type ApiResponse<T> = {
  data: T;
  status: number;
  ok: boolean;
};

export type ApiErrorResponse = {
  message: string;
  status: number;
  code?: string;
};
