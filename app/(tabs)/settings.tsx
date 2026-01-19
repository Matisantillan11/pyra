import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { EmergencyNumbersSection } from './settings/components';

export default function Settings() {
  return (
    <SafeAreaView edges={['top']} className='flex-1'>
      <ScrollView className="p-8">
        <EmergencyNumbersSection />
      </ScrollView>
    </SafeAreaView>
  );
}


