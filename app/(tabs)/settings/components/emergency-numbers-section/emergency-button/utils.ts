export const getEmergencyButtonBackground = (value: string) => {
  switch (value) {
    case 'fire':
      return 'bg-red-700 active:bg-red-600/30 hover:bg-red-600/30';
    case 'police':
      return 'bg-blue-700 active:bg-blue-600/30 hover:bg-blue-600/30';
    case 'ambulance':
      return 'bg-green-700 active:bg-green-600/30 hover:bg-green-600/30';
    case 'shield':
      return 'bg-yellow-700 active:bg-yellow-600/30 hover:bg-yellow-600/30';
  }
};
