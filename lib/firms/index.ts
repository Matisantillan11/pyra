// Types
export type {
  FirePoint,
  FIRMSSource,
  FetchFiresParams,
  BoundingBox,
} from './types';

// Constants
export { ARGENTINA_BOUNDS } from './types';

// Service functions
export { fetchFiresArgentina, fetchFiresArea } from './service';

// Hooks
export { useFiresArgentina, useFiresArea } from './hooks';
