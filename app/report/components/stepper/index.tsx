import React, { Children, createContext, ReactElement, ReactNode, useContext, useState } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowRightIcon } from '~/components/icons';
import { Button, ThemedText } from '~/components/ui';
import { cn } from '~/utils/tailwind';
import { ReportStepper } from '../report-stepper';

// Context for sharing stepper state with children
interface StepperContextValue {
  currentStep: number;
  totalSteps: number;
  goNext: () => void;
  goBack: () => void;
  goToStep: (step: number) => void;
}

const StepperContext = createContext<StepperContextValue | null>(null);

export const useStepperContext = () => {
  const context = useContext(StepperContext);
  if (!context) {
    throw new Error('useStepperContext must be used within a Stepper');
  }
  return context;
};

// Step component props
interface StepProps {
  children: ReactNode;
  nextLabel?: string;
  nextDisabled?: boolean;
  showBackButton?: boolean;
  secondaryAction?: {
    label: string;
    onPress: () => void;
  };
}

// Step component - used to define each step's content and config
function Step({ children }: StepProps) {
  return <>{children}</>;
}

// Main Stepper props
interface StepperProps {
  children: ReactElement<StepProps>[];
  steps: string[];
  onComplete: () => void;
  initialStep?: number;
}

// Main Stepper component
function StepperRoot({ children, steps, onComplete, initialStep = 0 }: StepperProps) {
  const [currentStep, setCurrentStep] = useState(initialStep);

  const childrenArray = Children.toArray(children) as ReactElement<StepProps>[];
  const totalSteps = childrenArray.length;

  const goNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete();
    }
  };

  const goBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const goToStep = (step: number) => {
    if (step >= 0 && step < totalSteps) {
      setCurrentStep(step);
    }
  };

  const currentChild = childrenArray[currentStep];
  const {
    nextLabel = 'Siguiente',
    nextDisabled = false,
    showBackButton = currentStep > 0,
    secondaryAction,
  } = currentChild?.props || {};

  const isLastStep = currentStep === totalSteps - 1;
  const finalNextLabel = isLastStep ? 'ENVIAR REPORTE' : nextLabel;

  const onNavigateToStep = (step: number) => {
    if (step >= 0 && step < totalSteps - 1) {
      setCurrentStep(step);
    }
  };

  const contextValue: StepperContextValue = {
    currentStep,
    totalSteps,
    goNext,
    goBack,
    goToStep,
  };

  // Default layout with scrollable content
  return (
    <StepperContext.Provider value={contextValue}>
      <SafeAreaView edges={['top', 'bottom']} className="flex-1 bg-white dark:bg-dark-bg">
        <ReportStepper steps={steps} currentStep={currentStep} onNavigateToStep={onNavigateToStep} />

        {currentChild}

        {/* Fixed bottom buttons */}
        <View className="absolute bottom-20 left-0 right-0 px-6 pb-6 pt-4">
          {secondaryAction && (
            <Button
              onPress={secondaryAction.onPress}
              className="w-full rounded-xl h-14 bg-white dark:bg-dark-surface border-2 border-red-600 dark:border-red-500 mb-3"
            >
              <ThemedText className="text-red-600 dark:text-red-500 text-base font-montserrat-semibold">
                {secondaryAction.label}
              </ThemedText>
            </Button>
          )}

          <View className="gap-3 ">
            {showBackButton && (
              <Button
                onPress={goBack}
                className="flex-1 rounded-xl h-14 bg-gray-100 dark:bg-gray-800"
              >
                <ThemedText className="text-gray-700 dark:text-gray-300 text-base font-montserrat-semibold">
                  Atrás
                </ThemedText>
              </Button>
            )}

            <Button
              onPress={goNext}
              disabled={nextDisabled}
              className={cn(
                'rounded-xl h-14 flex-row items-center justify-center',
                showBackButton ? 'flex-1' : 'w-full',
                nextDisabled ? 'bg-gray-300 dark:bg-gray-700' : 'bg-red-600'
              )}
            >
              <ThemedText className="text-white text-base font-montserrat-semibold mr-2">
                {finalNextLabel}
              </ThemedText>
              <ArrowRightIcon size={20} color="white" strokeWidth={2.5} />
            </Button>
          </View>
        </View>
      </SafeAreaView>
    </StepperContext.Provider>
  );
}

// Export as compound component
export const Stepper = Object.assign(StepperRoot, {
  Step,
});

export type { StepperProps, StepProps };

