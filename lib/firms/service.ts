import { fetcher } from '~/lib/fetcher';
import type { BoundingBox, FirePoint, FIRMSSource } from './types';
import { ARGENTINA_BOUNDS } from './types';
import { parseFiresCSV } from './utils';

const FIRMS_BASE_URL = 'https://firms.modaps.eosdis.nasa.gov/api/area/csv';
const DEFAULT_SOURCE = 'VIIRS_NOAA20_NRT';
const FIRMS_API_KEY = process.env.EXPO_PUBLIC_FIRMS_API_KEY;

function buildFirmsUrl({
  source = DEFAULT_SOURCE,
  bounds,
  days = 1,
  date,
}: {
  source?: FIRMSSource;
  bounds: BoundingBox;
  days?: number;
  date?: string;
}): string {
  const areaCoords = `${bounds.west},${bounds.south},${bounds.east},${bounds.north}`;
  const baseUrl = `${FIRMS_BASE_URL}/${FIRMS_API_KEY}/${source}/${areaCoords}/${days}`;
  if (date) {
    return `${baseUrl}/${date}`;
  }

  return baseUrl;
}

export async function fetchFires(): Promise<FirePoint[]> {
  const url = buildFirmsUrl({ bounds: ARGENTINA_BOUNDS });
  const csvData = await fetcher<string>({
    url,
    responseType: 'text',
    withAuthentication: false,
  });

  console.log({ csvData });
  return parseFiresCSV(csvData);
}
