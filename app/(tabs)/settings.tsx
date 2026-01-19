import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { EmergencyNumbersSection, Privacy, Security } from './settings/components';

export default function Settings() {
  return (
    <SafeAreaView edges={['top']} className='flex-1'>
      <ScrollView className="p-8">
        <View className="gap-4">
          <Privacy />
          <Security />
          <EmergencyNumbersSection />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}


