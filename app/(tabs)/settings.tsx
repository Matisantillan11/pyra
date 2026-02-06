import { useNavigation } from 'expo-router';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeftIcon } from '~/components/icons';
import { Button, ThemedText } from '~/components/ui';
import { useTheme } from '~/lib/theme';
import { Appearance, EmergencyNumbersSection, LocationAndAlerts, Privacy, Security } from './settings/components';

export default function Settings() {
  const { isDark } = useTheme();
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  }

  return (
    <SafeAreaView edges={['top', 'bottom']} className='flex-1'>
      <ScrollView className="p-8 h-full">
        <View className='flex-row items-center justify-between gap-2 mb-6'>
          <Button variant="ghost" className="h-10 w-10 rounded-full shadow-none" onPress={handleGoBack}>
            <ArrowLeftIcon color={isDark ? "white" : "gray"} />
          </Button>
          <ThemedText className="text-xl font-bold w-full">Configuración</ThemedText>
        </View>

        <View className="gap-4">
          <EmergencyNumbersSection />
          <Appearance />
          <LocationAndAlerts />
          <Privacy />
          <Security />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}


