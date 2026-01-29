export enum DayNight {
  DAY = 'D',
  NIGHT = 'N',
}

export enum Confidence {
  LOW = 'l',
  NOMINAL = 'n',
  HIGH = 'h',
}

/**
 * Fire data point from NASA FIRMS API
 * Based on VIIRS/MODIS Active Fire product
 */
export type FirePoint = {
  /** Latitude of fire detection */
  latitude: number;
  /** Longitude of fire detection */
  longitude: number;
  /** Brightness temperature (Kelvin) */
  brightness: number;
  /** Acquisition date and time (YYYY-MM-DD HHMM) */
  dateTime: string;
  /** Satellite source */
  satellite: string;
  /** Instrument (VIIRS or MODIS) */
  instrument: string;
  /** Confidence level (low, nominal, high for VIIRS; 0-100 for MODIS) */
  confidence: Confidence;
  /** Fire radiative power (MW) */
  intensity: number;
  /** Day/Night flag (D or N) */
  daynight: DayNight;
};

export type FIRMSSource =
  | 'VIIRS_NOAA20_NRT'
  | 'VIIRS_NOAA21_NRT'
  | 'VIIRS_SNPP_NRT'
  | 'MODIS_NRT'
  | 'MODIS_SP'
  | 'VIIRS_NOAA20_SP'
  | 'VIIRS_SNPP_SP';

export type BoundingBox = {
  west: number;
  south: number;
  east: number;
  north: number;
};

export const ARGENTINA_BOUNDS: BoundingBox = {
  west: -73.56,
  south: -55.05,
  east: -53.64,
  north: -21.78,
};

export type UseFiresState = {
  fires: FirePoint[];
  isLoading: boolean;
  error: Error | null;
};

export type UseFiresReturn = UseFiresState & {
  refetch: () => Promise<void>;
};
