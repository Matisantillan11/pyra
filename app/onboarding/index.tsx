import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, ThemedText } from "~/components/ui";
import { cn } from "~/utils/tailwind";
import { Hero, Stepper } from "./components";

const steps = ['welcome', 'real-time'];

export default function Onboarding() {
  const [activeStep, setActiveStep] = useState(0);

  const router = useRouter();
  const isLastStep = activeStep === steps.length - 1;

  const handleStep = (step: number) => {
    setActiveStep(step);
  };

  const handleNavigateToLocationScreen = () => {
    router.push('/onboarding/location');
  }

  useEffect(function changeSteps() {
    const timer = setTimeout(() => {
      if (isLastStep) setActiveStep(0);
      else setActiveStep(activeStep + 1);
    }, 6000);

    return () => clearTimeout(timer);
  }, [activeStep]);

  return (
    <SafeAreaView edges={['top', 'bottom']} className="flex-1">
      <View className="relative w-full h-full p-8">
        <Hero
          title={isLastStep
            ? "Alertas en tiempo real"
            : "Tu reporte salva bosques"}
          imageSource={isLastStep
            ? require("~/assets/images/map.png")
            : require("~/assets/images/save-the-forest.png")
          }
        />

        <View className="mt-4">
          <ThemedText className="text-sm font-medium mt-2 text-center">
            {isLastStep
              ? "Recibi alertas sobre focos activos en tu zona."
              : "Reporta incendios o riesgos en segundos."
            }
          </ThemedText>
          <ThemedText className="text-sm font-medium px-6 text-center">
            {isLastStep
              ? "Utilizamos tecnología de vanguardia para detectar focos activos en tiempo real y mantenerte informado sobre lo que sucede cerca tuyo."
              : "Tu colaboración es clave para una respuesta rápida de los servicios de emergencia."
            }
          </ThemedText>
        </View>

        <View className={cn(
          "flex-row items-center justify-center",
          isLastStep ? "mt-7" : "mt-4")}>
          <Stepper steps={steps} activeStep={activeStep} onStepChange={handleStep} />
        </View>


        <Button onPress={handleNavigateToLocationScreen} className="absolute w-full bottom-3 left-8 right-8 bg-red-600">
          <ThemedText className="text-white font-bold">Comenzar</ThemedText>
        </Button>
      </View>
    </SafeAreaView>
  )
}
