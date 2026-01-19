import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { EmergencyNumbersSection, Security } from './settings/components';

export default function Settings() {
  return (
    <SafeAreaView edges={['top']} className='flex-1'>
      <ScrollView className="p-8">
        <Security />
        <EmergencyNumbersSection />
      </ScrollView>
    </SafeAreaView>
  );
}


