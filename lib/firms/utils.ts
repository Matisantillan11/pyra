import { Confidence, DayNight, FirePoint } from './types';

/**
 * Parse CSV response from FIRMS API into FirePoint objects
 */
export function parseFiresCSV(csv: string): FirePoint[] {
  const lines = csv.trim().split('\n');

  if (lines.length < 2) {
    return [];
  }

  const headers = lines[0].split(',');

  const latIdx = headers.indexOf('latitude');
  const lonIdx = headers.indexOf('longitude');
  const brightIdx =
    headers.indexOf('bright_ti4') !== -1
      ? headers.indexOf('bright_ti4')
      : headers.indexOf('brightness');
  const dateIdx = headers.indexOf('acq_date');
  const timeIdx = headers.indexOf('acq_time');
  const satIdx = headers.indexOf('satellite');
  const instIdx = headers.indexOf('instrument');
  const confIdx = headers.indexOf('confidence');
  const frpIdx = headers.indexOf('frp');
  const dnIdx = headers.indexOf('daynight');

  return lines
    .slice(1)
    .map((line) => {
      const values = line.split(',');
      return {
        latitude: parseFloat(values[latIdx]),
        longitude: parseFloat(values[lonIdx]),
        brightness: parseFloat(values[brightIdx]) || 0,
        dateTime: `${values[dateIdx] || ''} ${values[timeIdx] || ''}`,
        satellite: values[satIdx] || '',
        instrument: values[instIdx] || '',
        confidence: (values[confIdx] as Confidence) || Confidence.LOW,
        intensity: parseFloat(values[frpIdx]) || 0,
        daynight: (values[dnIdx] as DayNight) || DayNight.DAY,
      };
    })
    .filter((fire) => !isNaN(fire.latitude) && !isNaN(fire.longitude));
}
