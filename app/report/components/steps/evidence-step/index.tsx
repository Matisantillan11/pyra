import { ScrollView, TextInput, TouchableOpacity, View } from 'react-native';

import { CameraIcon } from '~/components/icons';
import { ThemedText } from '~/components/ui';
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
            <View className="w-12 h-12 bg-red-600 rounded-full items-center justify-center mb-4">
              <CameraIcon size={24} color="white" strokeWidth={2} />
            </View>
            <ThemedText className="text-xl font-montserrat-bold text-gray-900 text-center">
              Evidencia Visual
            </ThemedText>
            <ThemedText className="text-sm text-gray-500 font-montserrat-medium text-center mt-1">
              (Opcional)
            </ThemedText>
          </View>

          <ThemedText className="text-base text-gray-600 text-center mt-4 font-montserrat-regular">
            Sube una foto clara. Ayuda a los equipos de emergencia y el tamaño de la zona de vegetación afectada.
          </ThemedText>

          {/* Camera Button */}
          <TouchableOpacity
            onPress={handleCameraPress}
            activeOpacity={0.7}
            className="mt-8 border-2 border-dashed border-gray-300 rounded-2xl p-8 items-center justify-center"
          >
            {evidence ? (
              <View className="items-center">
                <ThemedText className="text-green-600 text-2xl mb-2">✓</ThemedText>
                <ThemedText className="text-sm font-montserrat-semibold text-gray-900">
                  Foto añadida
                </ThemedText>
              </View>
            ) : (
              <View className="items-center">
                <View className="w-16 h-16 bg-gray-100 rounded-full items-center justify-center mb-3">
                  <CameraIcon size={32} color="#6B7280" strokeWidth={2} />
                </View>
                <ThemedText className="text-base font-montserrat-semibold text-gray-700">
                  Tocar para añadir evidencia
                </ThemedText>
                <ThemedText className="text-sm text-gray-500 font-montserrat-regular">
                  (Foto o Galería)
                </ThemedText>
              </View>
            )}
          </TouchableOpacity>

          {/* Privacy Notice */}
          <View className="mt-6 bg-blue-50 p-4 rounded-xl flex-row items-start">
            <ThemedText className="text-blue-600 mr-2">ℹ️</ThemedText>
            <View className="flex-1">
              <ThemedText className="text-xs font-montserrat-semibold text-blue-900">
                Privacidad y Datos
              </ThemedText>
              <ThemedText className="text-xs text-blue-700 font-montserrat-regular mt-1">
                Las imágenes se comprimen automáticamente para ahorrar datos móviles. Solo serán visibles para el personal de emergencia.
              </ThemedText>
            </View>
          </View>

          {/* Notes Input */}
          <View className="mt-6">
            <ThemedText className="text-sm font-montserrat-semibold text-gray-700 mb-2">
              Notas adicionales (Opcional)
            </ThemedText>
            <TextInput
              value={notes}
              onChangeText={onNotesChange}
              placeholder="Describe accesos, cercanía a viviendas o detalles relevantes..."
              placeholderTextColor="#9CA3AF"
              multiline
              numberOfLines={4}
              className="border border-gray-300 rounded-xl p-4 text-gray-900 font-montserrat-regular text-sm"
              style={{ textAlignVertical: 'top' }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
