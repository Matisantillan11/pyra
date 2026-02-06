import { View } from 'react-native';
import CardCloudIcon from '~/app/(tabs)/feed/components/card/card-cloud-icon';
import CardDangerIcon from '~/app/(tabs)/feed/components/card/card-danger-icon';
import CardFireIcon from '~/app/(tabs)/feed/components/card/card-fire-icon';
import { Button, ThemedText } from '~/components/ui';
import { cn } from '~/utils/tailwind';
import { AlertType } from '../../../types';
import { getTypeIndicator } from './utils';

interface AlertTypeStepProps {
  selectedType: AlertType | null;
  onSelect: (type: AlertType) => void;
}

const alertOptions = [
    {
      type: 'fire' as AlertType,
      label: 'Fuego',
      description: 'Llamas visibles o incendio activo',
    icon: () => (
      <View className='w-12 h-12 rounded-xl items-center justify-center bg-red-50 dark:bg-red-500/10'>
        <CardFireIcon />
      </View>
    ),
    bgColor: 'bg-red-50 dark:bg-dark-surface',
    },
    {
      type: 'smoke' as AlertType,
      label: 'Humo',
      description: 'Columna de humo, olor fuerte',
      icon: () => (
        <CardCloudIcon />
      ),
      bgColor: 'bg-gray-100 dark:bg-dark-surface',
    },
    {
      type: 'risk' as AlertType,
      label: 'Riesgo',
      description: 'Fogata mal apagada, vidrios, etc.',
      icon: () => (
        <CardDangerIcon />
      ),
      bgColor: 'bg-yellow-50 dark:bg-dark-surface',
    },
  ];

export function AlertTypeStep({ selectedType, onSelect }: AlertTypeStepProps) {
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
          const { isFireType, isRiskType, isSmokeType } = getTypeIndicator(option.type);
          const isSelected = selectedType === option.type;

          return (
            <Button
              variant="ghost"
              key={option.type}
              onPress={() => onSelect(option.type)}
              activeOpacity={0.7}
              className={cn(
                'px-4 py-8 rounded-2xl border-2 flex-row items-center dark:shadow-none border-transparent',
                option.bgColor,
                isSelected && isFireType ? 'border-red-600 dark:border-red-500' : null,
                isSelected && isRiskType ? 'border-yellow-600 dark:border-yellow-500' : null,
                isSelected && isSmokeType ? 'border-gray-600 dark:border-gray-500' : null
              )}
            >
              <View className="mr-4">
                <Icon />
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
