import { useCallback, useEffect, useState } from 'react';
import { fetchFires } from './service';
import type { UseFiresReturn, UseFiresState } from './types';

/**
 * Hook to fetch and manage fire data for Argentina
 *
 * @example
 * ```tsx
 * const { fires, isLoading, error, refetch } = useFiresArgentina({
 * });
 *
 * if (isLoading) return <Loading />;
 * if (error) return <Error message={error.message} />;
 *
 * return fires.map(fire => (
 *   <MapMarker
 *     key={`${fire.latitude}-${fire.longitude}`}
 *     type="fire"
 *     coordinate={{ latitude: fire.latitude, longitude: fire.longitude }}
 *   />
 * ));
 * ```
 */
export function useFires(): UseFiresReturn {
  const [state, setState] = useState<UseFiresState>({
    fires: [],
    isLoading: true,
    error: null,
  });

  const fetchActiveFires = useCallback(async () => {
    setState((prev) => ({ ...prev, isLoading: true, error: null }));

    try {
      const fires = await fetchFires();
      setState({ fires, isLoading: false, error: null });
    } catch (err) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: err instanceof Error ? err : new Error('Failed to fetch fires'),
      }));
    }
  }, []);

  useEffect(() => {
    fetchActiveFires();
  }, []);

  return {
    ...state,
    refetch: fetchActiveFires,
  };
}

/**
 * Hook to fetch and manage fire data for a custom area
 *
 * @example
 * ```tsx
 * const { fires, isLoading, error } = useFiresArea({
 *   apiKey: FIRMS_API_KEY,
 *   bounds: { west: -70, south: -40, east: -60, north: -30 },
 *   days: 2,
 * });
 * ```
 */
/* export function useFiresArea(params: FetchFiresParams & { bounds: BoundingBox }): UseFiresReturn {
  const [state, setState] = useState<UseFiresState>({
    fires: [],
    isLoading: true,
    error: null,
  });

  const fetchFires = useCallback(async () => {
    setState((prev) => ({ ...prev, isLoading: true, error: null }));

    try {
      const fires = await fetchFiresArea(params);
      setState({ fires, isLoading: false, error: null });
    } catch (err) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: err instanceof Error ? err : new Error('Failed to fetch fires'),
      }));
    }
  }, [params.apiKey, params.source, params.days, params.date, params.bounds]); 

  useEffect(() => {
    fetchFires();
  }, [fetchFires]);

  return {
    ...state,
    refetch: fetchFires,
  };
}
*/
