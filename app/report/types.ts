export type AlertType = 'fire' | 'smoke' | 'risk';

export interface Location {
  address: string;
  coordinates?: {
    latitude: number;
    longitude: number;
  };
}

export interface Evidence {
  uri: string;
  type: 'photo' | 'video';
}

export interface ReportData {
  alertType: AlertType | null;
  location: Location | null;
  evidence: Evidence | null;
  notes: string;
}
