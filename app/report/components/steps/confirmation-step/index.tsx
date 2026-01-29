import { ScrollView, TouchableOpacity, View } from 'react-native';
import { EditIcon, FireIcon, LocationIcon } from '~/components/icons';
import { ThemedText } from '~/components/ui';
import { ReportData } from '../../../types';

interface ConfirmationStepProps {
  reportData: ReportData;
}

export function ConfirmationStep({ reportData }: ConfirmationStepProps) {
  const getAlertTypeLabel = () => {
    switch (reportData.alertType) {
      case 'fire':
        return 'Incendio Forestal';
      case 'smoke':
        return 'Humo';
      case 'risk':
        return 'Riesgo';
      default:
        return 'Desconocido';
    }
  };

  return (
    <View className="h-full px-6 py-6">
      <ThemedText className="text-2xl font-montserrat-bold text-gray-900 dark:text-white mb-2">
        Resumen del reporte
      </ThemedText>
      <ThemedText className="text-sm text-gray-600 dark:text-gray-400 font-montserrat-regular mb-2">
        Verifica la información antes de alertar a los servicios.
      </ThemedText>

      <ScrollView showsVerticalScrollIndicator={false} className="h-[calc(100%-600px)] mb-40">
        <View className="gap-4">
          {/* Alert Type */}
          <View className="bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-700 rounded-2xl p-4 shadow-lg dark:shadow-white/10">
            <View className="flex-row items-center justify-between mb-3">
              <View className="flex-row items-center">
                <View className="w-10 h-10 bg-red-50 dark:bg-red-900/30 rounded-full items-center justify-center mr-3">
                  <FireIcon size={20} color="#DC2626" strokeWidth={2} />
                </View>
                <View>
                  <ThemedText className="text-xs text-gray-500 dark:text-gray-400 font-montserrat-medium uppercase">
                    Tipo de Incidente
                  </ThemedText>
                  <ThemedText className="text-base font-montserrat-bold text-gray-900 dark:text-white">
                    {getAlertTypeLabel()}
                  </ThemedText>
                </View>
              </View>
              <TouchableOpacity activeOpacity={0.7}>
                <EditIcon size={20} color="#9CA3AF" strokeWidth={2} />
              </TouchableOpacity>
            </View>
          </View>

          <View className="bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-700 rounded-2xl p-4 shadow-lg dark:shadow-md dark:shadow-white/10">
            <View className="flex-row items-center justify-between mb-3">
              <View className="flex-row items-center flex-1">
                <View className="w-10 h-10 bg-red-50 dark:bg-red-900/30 rounded-full items-center justify-center mr-3">
                  <LocationIcon size={20} color="#DC2626" strokeWidth={2} />
                </View>
                <View className="flex-1">
                  <ThemedText className="text-xs text-gray-500 dark:text-gray-400 font-montserrat-medium uppercase">
                    Ubicación
                  </ThemedText>
                  <ThemedText className="text-base font-montserrat-bold text-gray-900 dark:text-white">
                    {reportData.location?.address || 'Cerro Otto, Ladera Sur'}
                  </ThemedText>
                  <ThemedText className="text-xs text-gray-500 dark:text-gray-400 font-montserrat-regular">
                    Cercano a Refugio, Km 5.2
                  </ThemedText>
                </View>
              </View>
              <TouchableOpacity activeOpacity={0.7}>
                <EditIcon size={20} color="#9CA3AF" strokeWidth={2} />
              </TouchableOpacity>
            </View>
          </View>

          {reportData.evidence && (
            <View className="bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-700 rounded-2xl p-4 shadow-lg">
              <View className="flex-row items-center justify-between mb-3">
                <ThemedText className="text-xs text-gray-500 dark:text-gray-400 font-montserrat-medium uppercase">
                  Evidencia Visual
                </ThemedText>
                <TouchableOpacity activeOpacity={0.7}>
                  <ThemedText className="text-sm text-red-600 dark:text-red-500 font-montserrat-semibold">
                    Eliminar
                  </ThemedText>
                </TouchableOpacity>
              </View>
              <View className="bg-gray-100 dark:bg-gray-800 rounded-xl h-48 items-center justify-center overflow-hidden">
                <ThemedText className="text-gray-500 dark:text-gray-400 font-montserrat-medium">
                  Vista previa de foto
                </ThemedText>
                <ThemedText className="text-xs text-gray-400 font-montserrat-regular mt-1">
                  Nueva Fecha
                </ThemedText>
              </View>
            </View>
          )}

          {reportData.notes && (
            <View className="bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-700 rounded-2xl p-4">
              <ThemedText className="text-xs text-gray-500 dark:text-gray-400 font-montserrat-medium uppercase mb-2">
                Notas adicionales (Opcional)
              </ThemedText>
              <ThemedText className="text-sm text-gray-700 dark:text-gray-300 font-montserrat-regular">
                {reportData.notes}
              </ThemedText>
            </View>
          )}
        </View>

        <View className="mt-3">
          <ThemedText className="text-xs text-gray-500 dark:text-gray-400 font-montserrat-regular text-center">
            Al presionar "Enviar", usted confirma bajo declaración jurada que la información es verdadera y corresponde a una emergencia real.
          </ThemedText>
        </View>
      </ScrollView>
    </View>
  );
}
