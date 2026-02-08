import { TouchableOpacity, View } from "react-native";
import { cn } from "~/utils/tailwind";

export default function Stepper({
  steps,
  activeStep,
  onStepChange
}: {
  steps: string[];
  activeStep: number;
  onStepChange: (step: number) => void
}) {
  return (
    <View className="flex-row items-center gap-2">
      {steps.map((_step, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => onStepChange(index)}
          className={cn(
            "h-2 transition-all duration-300",
            index === activeStep ? "w-12" : "w-4"
          )}
        >
          <View
            className={cn(
              "h-full w-full rounded-full transition-colors duration-300",
              index === activeStep ? "bg-red-600" : "bg-gray-300 dark:bg-gray-600"
            )}
          />
        </TouchableOpacity>
      ))}
    </View>
  )
}
