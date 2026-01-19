export const getEmergencyButtonBackground = (value: string) => {
  switch(value) {
    case 'fire':
      return 'bg-red-700';
    case 'police':
      return 'bg-blue-700';
    case 'ambulance':
      return 'bg-green-700';
    case 'shield':
      return 'bg-yellow-700';
  }
}
