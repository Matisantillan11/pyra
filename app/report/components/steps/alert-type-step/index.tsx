import { View } from 'react-native';
import { ArrowRightIcon, CloudIcon, FireIcon } from '~/components/icons';
import { Button, ThemedText } from '~/components/ui';
import { cn } from '~/utils/tailwind';
import { AlertType } from '../../../types';

interface AlertTypeStepProps {
  selectedType: AlertType | null;
  onSelect: (type: AlertType) => void;
  onNext: () => void;
}

export function AlertTypeStep({ selectedType, onSelect, onNext }: AlertTypeStepProps) {
  const alertOptions = [
    {
      type: 'fire' as AlertType,
      label: 'Fuego',
      description: 'Llamas visibles o incendio activo',
      icon: FireIcon,
      bgColor: 'bg-red-50',
      iconColor: '#DC2626',
    },
    {
      type: 'smoke' as AlertType,
      label: 'Humo',
      description: 'Columna de humo, olor fuerte',
      icon: CloudIcon,
      bgColor: 'bg-gray-100',
      iconColor: '#6B7280',
    },
    {
      type: 'risk' as AlertType,
      label: 'Riesgo',
      description: 'Fogata mal apagada, vidrios, etc.',
      icon: () => (
        <View className="w-12 h-12 bg-yellow-500 rounded-full items-center justify-center">
          <ThemedText className="text-white text-2xl font-bold">!</ThemedText>
        </View>
      ),
      bgColor: 'bg-yellow-50',
      iconColor: '#EAB308',
    },
  ];

  return (
    <View className="relative h-full px-6">
      <View className="py-4">
        <ThemedText className="text-4xl font-montserrat-bold text-gray-900">
          ¿Qué <ThemedText className="text-red-600 font-bold text-4xl">viste?</ThemedText>
        </ThemedText>
        <ThemedText className="text-base text-gray-600 mt-2 font-montserrat-regular">
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
                isSelected ? 'border-red-600' : 'border-transparent'
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
                <ThemedText className="text-lg font-montserrat-semibold text-gray-900">
                  {option.label}
                </ThemedText>
                <ThemedText className="text-sm text-gray-600 font-montserrat-regular">
                  {option.description}
                </ThemedText>
              </View>
            </Button>
          );
        })}
      </View>

      <View className="absolute bottom-30 left-0 right-0 px-6">
        <Button
          onPress={onNext}
          disabled={!selectedType}
          className={cn(
            'w-full rounded-xl h-14 flex-row items-center justify-center',
            selectedType ? 'bg-red-600' : 'bg-gray-300'
          )}
        >
          <ThemedText className="text-white text-base font-montserrat-semibold mr-2">
            Siguiente
          </ThemedText>
          <ArrowRightIcon size={20} color="white" strokeWidth={2.5} />
        </Button>
      </View>
    </View>
  );
}
