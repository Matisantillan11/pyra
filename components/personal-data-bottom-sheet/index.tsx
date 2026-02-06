import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { RefObject } from "react";
import { View } from "react-native";
import { Form } from "~/lib/form";
import { BottomSheet, Button, Input, ThemedText } from "../ui";
import { BottomSheetTitle } from "./bottom-sheet-title";

export const PersonalDataBottomSheet = ({
  ref,
  handleSheetChanges,
  onClose,
}: {
  ref: RefObject<BottomSheetModal | null>;
  handleSheetChanges: (index: number) => void;
  onClose: () => void;
}) => {
  const form = Form.useForm({
    defaultValues: {
      name: '',
      lastName: '',
      phone: '',
    },
  })

  return (
    <BottomSheet
      ref={ref}
      snapPoints={['75%', '100%']}
      onChange={handleSheetChanges}
      enablePanDownToClose
    >
      <View className="flex-1 h-full">
        <BottomSheetTitle />

        <Form {...form}>
          <View className="flex-1 gap-4 mt-6 mb-6">
            <Input
              label="Nombre"
              placeholder="Ej: Juan"
            />
            <Input
              label="Apellido"
              placeholder="Ej: Perez"
            />

            <Input
              label="Numero de teléfono"
              placeholder="+54 3511234567"
            />
          </View>
        </Form>

        <View className="w-full flex-row gap-2 mt-4 mb-10">
          <Button onPress={onClose} variant="outline" className="w-1/2 border-2 border-red-600 active:bg-red-700/30">
            <ThemedText className="text-red-600 dark:text-red-600 font-bold">Cancelar</ThemedText>
          </Button>

          <Button onPress={onClose} variant="ghost" className="w-1/2 dark:bg-red-600">
            <ThemedText className="text-white font-bold">Continuar</ThemedText>
          </Button>
        </View>
      </View>
    </BottomSheet>
  );
};
