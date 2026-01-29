/**
 * Auth event types
 */
export type AuthEventType = 'auth:error' | 'auth:expired';

type AuthEventListener = () => void | Promise<void>;

/**
 * Simple event emitter for auth-related events
 * This allows the app to subscribe to auth events and react accordingly
 * (e.g., redirect to login screen when a 401 is received)
 */
const listeners: Map<AuthEventType, Set<AuthEventListener>> = new Map();

/**
 * Subscribe to an auth event
 * @returns Unsubscribe function
 */
export function onAuthEvent(
  event: AuthEventType,
  listener: AuthEventListener
): () => void {
  if (!listeners.has(event)) {
    listeners.set(event, new Set());
  }

  listeners.get(event)!.add(listener);

  return () => {
    listeners.get(event)?.delete(listener);
  };
}

/**
 * Emit an auth event to all subscribers
 */
export async function emitAuthEvent(event: AuthEventType): Promise<void> {
  const eventListeners = listeners.get(event);

  if (!eventListeners) {
    return;
  }

  const promises = Array.from(eventListeners).map((listener) => {
    try {
      return Promise.resolve(listener());
    } catch (error) {
      console.error(`Error in auth event listener for ${event}:`, error);
      return Promise.resolve();
    }
  });

  await Promise.all(promises);
}

/**
 * Clear all listeners (useful for testing)
 */
export function clearAuthListeners(): void {
  listeners.clear();
}
