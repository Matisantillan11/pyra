import { router } from 'expo-router';
import { useState } from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';
import { ReportButton } from '~/components';

export default function Map() {
  const [isEnabled, setIsEnabled] = useState(false);

  const handleReportPress = () => {
    router.push('/report');
  };

  return (
    <View className="h-full items-center justify-center relative">
      <MapView style={{ flex: 1, width: '100%', height: '100%' }} />
      <ReportButton onPress={handleReportPress} />
    </View>
  );
}
