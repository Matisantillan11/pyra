import { View } from 'react-native';
import { CloudIcon, FireIcon } from '~/components/icons';
import { Button, ThemedText } from '~/components/ui';
import { cn } from '~/utils/tailwind';
import { AlertType } from '../../../types';

interface AlertTypeStepProps {
  selectedType: AlertType | null;
  onSelect: (type: AlertType) => void;
}

export function AlertTypeStep({ selectedType, onSelect }: AlertTypeStepProps) {
  const alertOptions = [
    {
      type: 'fire' as AlertType,
      label: 'Fuego',
      description: 'Llamas visibles o incendio activo',
      icon: FireIcon,
      bgColor: 'bg-red-50 dark:bg-red-900/30',
      iconColor: '#DC2626',
    },
    {
      type: 'smoke' as AlertType,
      label: 'Humo',
      description: 'Columna de humo, olor fuerte',
      icon: CloudIcon,
      bgColor: 'bg-gray-100 dark:bg-gray-800',
      iconColor: '#6B7280',
    },
    {
      type: 'risk' as AlertType,
      label: 'Riesgo',
      description: 'Fogata mal apagada, vidrios, etc.',
      icon: () => (
        <View className="w-12 h-12 bg-yellow-500 dark:bg-yellow-600/30 rounded-full items-center justify-center">
          <ThemedText className="text-white text-2xl font-bold">!</ThemedText>
        </View>
      ),
      bgColor: 'bg-yellow-50 dark:bg-yellow-900/30',
      iconColor: '#EAB308',
    },
  ];

  return (
    <View className="px-6 h-full">
      <View className="py-4">
        <ThemedText className="text-4xl font-montserrat-bold text-gray-900 dark:text-white">
          ¿Qué <ThemedText className="text-red-600 dark:text-red-500 font-bold text-4xl">viste?</ThemedText>
        </ThemedText>
        <ThemedText className="text-base text-gray-600 dark:text-gray-400 mt-2 font-montserrat-regular">
          Ayuda a los equipos de emergencia identificando la amenaza.
        </ThemedText>
      </View>

      <View className="gap-4">
        {alertOptions.map((option) => {
          const Icon = option.icon;
          const isSelected = selectedType === option.type;

          return (
            <Button
              variant="ghost"
              key={option.type}
              onPress={() => onSelect(option.type)}
              activeOpacity={0.7}
              className={cn(
                'p-4 rounded-2xl border-2 flex-row items-center',
                option.bgColor,
                isSelected ? 'border-red-600 dark:border-red-500' : 'border-transparent'
              )}
            >
              <View className="mr-4">
                {option.type === 'risk' ? (
                  <Icon />
                ) : (
                  <View className={cn('w-12 h-12 rounded-full items-center justify-center', option.bgColor)}>
                    <Icon size={28} color={option.iconColor} strokeWidth={2} />
                  </View>
                )}
              </View>
              <View className="flex-1">
                <ThemedText className="text-lg font-montserrat-semibold text-gray-900 dark:text-white">
                  {option.label}
                </ThemedText>
                <ThemedText className="text-sm text-gray-600 dark:text-gray-400 font-montserrat-regular">
                  {option.description}
                </ThemedText>
              </View>
            </Button>
          );
        })}
      </View>
    </View>
  );
}
