import { View, } from 'react-native'
import { AlertIcon } from '~/components/icons'
import { ThemedText } from '~/components/ui'
export default function EmergencyCard() {
  return (
    <View className="p-4 shadow-lg rounded-lg gap-1 bg-orange-100/80 dark:bg-orange-900/30 border-l-2 border-orange-800 dark:border-orange-500">
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center gap-2">
          <View className="rounded-full bg-orange-200/80 dark:bg-orange-800/50 py-2 px-4">
            <ThemedText className="text-sm font-medium text-orange-800 dark:text-orange-300">Oficial</ThemedText>
          </View>

          <ThemedText className="text-sm font-medium text-orange-800 dark:text-orange-300">Defensa Civil</ThemedText>
        </View>
        <ThemedText className="text-xs font-medium text-gray-500 dark:text-gray-400">Hace 10 min</ThemedText>
      </View>

      <View className="gap-4">
        <View className="flex-row items-center gap-2">
          <AlertIcon color="orange" strokeWidth={2} />
          <ThemedText className="text-lg font-bold">ALERTA: Viento extremo</ThemedText>
        </View>

        <ThemedText className="text-sm font-medium text-gray-500 dark:text-gray-400">
          Vientos de hasta 90km/h. Queda prohibido hacer fuego en perimetro urbano y rural. Evite circular senderos boscosos.
        </ThemedText>
      </View>
    </View>
  )
}
