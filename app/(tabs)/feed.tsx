import { useRouter } from 'expo-router';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ReportButton } from '~/components';
import { EmergencyCard, RealTimeFeed } from './feed/components';

export default function Feed() {
  const router = useRouter();

  const handleReportPress = () => {
    router.push('/report');
  };

  return (
    <SafeAreaView edges={['top', 'bottom']} className='flex-1 bg-white dark:bg-dark-bg'>
      <ScrollView className="p-8">
        <View className="gap-4 pb-20">
          <EmergencyCard />
          <RealTimeFeed />
        </View>
      </ScrollView>

      <ReportButton onPress={handleReportPress} />
    </SafeAreaView>
  );
}
