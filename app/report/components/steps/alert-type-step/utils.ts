export const getTypeIndicator = (type: string) => {
  return {
    isFireType: type === 'fire',
    isRiskType: type === 'risk',
    isSmokeType: type === 'smoke',
  };
};
