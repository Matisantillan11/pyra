import { EMERGENCY_BUTTON_DATA } from "./constants";

export type Emergency = typeof EMERGENCY_BUTTON_DATA[0];

export type EmergencyButtonProps = {
  emergency: Emergency;
}
