import { View } from 'react-native';
import { ThemedText } from '~/components/ui';
import { cn } from '~/utils/tailwind';

interface ReportStepperProps {
  steps: string[];
  currentStep: number;
}

export function ReportStepper({ steps, currentStep }: ReportStepperProps) {
  return (
    <View className="px-6 py-4">
      <View className="flex-row justify-between items-center gap-1">
        {steps.map((step, index) => (
          <View key={step} className="flex-1 items-center">
            <View className="flex-row items-center w-full">
              <View
                className={cn(
                  'h-1 flex-1 rounded-full',
                  index <= currentStep ? 'bg-red-600' : 'bg-gray-300'
                )}
              />


              {/* Step indicator */}
              {/* <View
                className={cn(
                  'w-1 h-1 rounded-full mx-1',
                  index === currentStep && 'bg-red-600',
                  index < currentStep && 'bg-red-600',
                  index > currentStep && 'bg-gray-300'
                )}
              />
 */}
              {/*
              {index < steps.length - 1 && (
                <View
                  className={cn(
                    'h-1 flex-1',
                    index < currentStep ? 'bg-red-600' : 'bg-gray-300'
                  )}
                />
              )} */}
            </View>

            {/* Step label */}
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
          </View>
        ))}
      </View>
    </View>
  );
}
