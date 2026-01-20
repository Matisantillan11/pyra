import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { VolumeOnIcon } from '~/components/icons';
import { Button, ThemedText } from '~/components/ui';
import { EmergencyCard, RealTimeFeed } from './feed/components';

export default function Feed() {
  return (
    <SafeAreaView edges={['top', 'bottom']} className='flex-1'>
      <ScrollView className="p-8">
        <View className="gap-4 pb-20">
          <EmergencyCard />
          <RealTimeFeed />
        </View>
      </ScrollView>

      <Button className="absolute h-12 w-12 bottom-24 right-10 bg-red-500 shadow-lg z-50 rounded-full">
        <ThemedText className="text-sm font-medium text-white">
          <VolumeOnIcon color="white" strokeWidth={2} />
        </ThemedText>
      </Button>
    </SafeAreaView>
  );
}
