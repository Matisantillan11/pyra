import { TouchableOpacity, View } from 'react-native';
import { ThemedText } from '~/components/ui';
import { cn } from '~/utils/tailwind';

interface ReportStepperProps {
  steps: string[];
  currentStep: number;
  onNavigateToStep: (step: number) => void;
}

export function ReportStepper({ steps, currentStep, onNavigateToStep }: ReportStepperProps) {

  return (
    <View className="px-6 py-4">
      <View className="flex-row justify-between items-center gap-1">
        {steps.map((step, index) => (
          <TouchableOpacity onPress={() => onNavigateToStep(index)} key={step} className="flex-1 items-center">
            <View className="flex-row items-center w-full">
              <View
                className={cn(
                  'h-1 flex-1 rounded-full',
                  index <= currentStep ? 'bg-red-600' : 'bg-gray-300'
                )}
              />
            </View>
            <ThemedText
              className={cn(
                'text-xs mt-2 font-montserrat-semibold',
                index === currentStep && 'text-red-600',
                index < currentStep && 'text-red-600',
                index > currentStep && 'text-gray-400'
              )}
            >
              {step}
            </ThemedText>
          </TouchableOpacity>

        ))}
      </View>

    </View>
  );
}
