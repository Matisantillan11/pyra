import { FirePoint } from '~/lib/firms';
import { MarkerType } from '~/lib/map';

export function getMarkerType(intensity: number): MarkerType {
  if (intensity > 100) return 'fire';
  if (intensity <= 35) return 'risk';
  return 'smoke';
}

export function getActiveFiresLength(fires: FirePoint[]): number {
  return fires.filter((fire) => fire.intensity <= 35).length;
}

export function getFireRiskLength(fires: FirePoint[]): number {
  return fires.filter((fire) => fire.intensity > 35).length;
}
