import { ScrollView, TouchableOpacity, View } from 'react-native';

import { CameraIcon } from '~/components/icons';
import { Input, ThemedText } from '~/components/ui';
import { Evidence } from '../../../types';

interface EvidenceStepProps {
  evidence: Evidence | null;
  notes: string;
  onEvidenceAdd: (evidence: Evidence) => void;
  onNotesChange: (notes: string) => void;
}

export function EvidenceStep({
  evidence,
  notes,
  onEvidenceAdd,
  onNotesChange,

}: EvidenceStepProps) {
  const handleCameraPress = () => {
    // Here you would open camera/gallery
    // For now, just simulate adding evidence
    onEvidenceAdd({
      uri: 'https://example.com/photo.jpg',
      type: 'photo',
    });
  };

  return (
    <View className="px-6 pt-6 pb-30">
      <ScrollView className='h-[calc(100% - 500px)] mb-40' showsVerticalScrollIndicator={false}>
        <View className="flex-1 px-6 py-6">
          <View className="items-center">
            <View className="w-12 h-12 bg-red-600 shadow-2xl shadow-red-600 rounded-full items-center justify-center mb-4">
              <CameraIcon size={24} color="white" strokeWidth={2} />
            </View>
            <ThemedText className="text-xl font-montserrat-bold text-gray-900 dark:text-white text-center">
              Evidencia Visual
            </ThemedText>
            <ThemedText className="text-sm text-gray-500 dark:text-gray-400 font-montserrat-medium text-center mt-1">
              (Opcional)
            </ThemedText>
          </View>

          <ThemedText className="text-base text-gray-600 dark:text-gray-400 text-center mt-4 font-montserrat-regular">
            Sube una foto clara. Ayuda a los equipos de emergencia y el tamaño de la zona de vegetación afectada.
          </ThemedText>

          <TouchableOpacity
            onPress={handleCameraPress}
            activeOpacity={0.7}
            className="mt-8 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-2xl p-8 items-center justify-center"
          >
            {evidence ? (
              <View className="items-center">
                <ThemedText className="text-green-600 dark:text-green-500 text-2xl mb-2">✓</ThemedText>
                <ThemedText className="text-sm font-montserrat-semibold text-gray-900 dark:text-white">
                  Foto añadida
                </ThemedText>
              </View>
            ) : (
              <View className="items-center">
                  <View className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full items-center justify-center mb-3">
                  <CameraIcon size={32} color="#6B7280" strokeWidth={2} />
                </View>
                  <ThemedText className="text-base font-montserrat-semibold text-gray-700 dark:text-gray-300">
                  Tocar para añadir evidencia
                </ThemedText>
                  <ThemedText className="text-sm text-gray-500 dark:text-gray-400 font-montserrat-regular">
                  (Foto o Galería)
                </ThemedText>
              </View>
            )}
          </TouchableOpacity>

          <View className="mt-6">
            <Input
              value={notes}
              onChangeText={onNotesChange}
              placeholder="Describe accesos, cercanía a viviendas o detalles relevantes..."
              placeholderTextColor="#9CA3AF"
              multiline
              label='Notas adicionales (Opcional)'
              maxLength={140}
              className="text-sm min-h-36"
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
