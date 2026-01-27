import { router } from 'expo-router';
import { View } from 'react-native';
import { CheckMarkSuccessIcon, PhoneIcon } from '~/components/icons';
import { Button, ThemedText } from '~/components/ui';

export default function ReportSuccess() {
  const handleBackToMap = () => {
    router.push('/(tabs)');
  };

  const safetyTips = [
    {
      icon: '💨',
      title: 'Aléjate a favor del viento',
      description: 'Evita que el humo bloquee tu visión o respiración.',
    },
    {
      icon: '🔥',
      title: 'No apagues fuegos grandes',
      description: 'Prioriza tu evacuación inmediata.',
    },
    {
      icon: '🚗',
      title: 'Despeja las rutas',
      description: 'Facilita el paso a los vehículos de bomberos.',
    },
  ];

  return (
    <View className="relative flex-1 items-center justify-center px-6 py-3">
      <View className="w-32 h-32 bg-green-500 rounded-full items-center justify-center mb-3">
        <CheckMarkSuccessIcon size={64} color="white" strokeWidth={3} />
      </View>

      <ThemedText className="text-3xl font-montserrat-bold text-gray-900 text-center">
        Reporte Enviado
      </ThemedText>
      <ThemedText className="text-base text-gray-600 font-montserrat-regular text-center">
        Las autoridades han sido notificadas.
      </ThemedText>
      <ThemedText className="text-base text-green-600 font-montserrat-semibold text-center">
        Gracias por colaborar. Mantente a salvo.
      </ThemedText>

      <View className="w-full mt-4">
        <View className="flex-row items-center mb-4">
          <ThemedText className="text-gray-400 mr-2">ℹ️</ThemedText>
          <ThemedText className="text-lg font-montserrat-bold text-gray-900">
            ¿Qué hacer ahora?
          </ThemedText>
        </View>

        <View className="gap-4">
          {safetyTips.map((tip, index) => (
            <View
              key={index}
              className="flex-row items-start bg-gray-50 py-4 px-2 rounded-2xl shadow-lg"
            >
              <View className="w-10 h-10 bg-white rounded-full items-center justify-center mr-3 shadow-sm">
                <ThemedText className="text-xl">{tip.icon}</ThemedText>
              </View>
              <View className="flex-1">
                <ThemedText className="text-base font-montserrat-semibold text-gray-900">
                  {tip.title}
                </ThemedText>
                <ThemedText className="text-sm text-gray-600 font-montserrat-regular mt-1">
                  {tip.description}
                </ThemedText>
              </View>
            </View>
          ))}
        </View>
      </View>

      <View className="absolute bottom-3 left-0 right-0 px-6 pb-6 gap-3">
        <Button
          onPress={handleBackToMap}
          className="w-full rounded-xl h-14 bg-red-600"
        >
          <ThemedText className="text-white text-base font-montserrat-semibold">
            Volver al Mapa
          </ThemedText>
        </Button>

        <Button
          className="w-full rounded-xl h-14 bg-red-700 flex-row items-center justify-center"
        >
          <PhoneIcon size={20} color="white" strokeWidth={2} />
          <ThemedText className="text-white text-base font-montserrat-semibold ml-2">
            Llamar a Emergencias (103)
          </ThemedText>
        </Button>
      </View>
    </View>
  );
}
