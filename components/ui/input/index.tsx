import { Text, TextInput, View } from 'react-native'
import { cn } from '~/utils/tailwind'
import { InputProps } from './types'
export default function Input({ label, errorText, isError, className, isRequired, ...props }: InputProps) {
  return (
    <View className={className}>
      {label ? <View className={cn("flex-row items-center", isRequired ? 'gap-1' : '')}>
        <Text className={cn("text-sm text-gray-500 dark:text-gray-400 mb-1 font-medium", isError ? "text-red-500" : '')}>
          {label}
        </Text>
        {isRequired ? <Text className={cn("text-orange-400 text-md font-bold", isError ? "text-red-500" : '')}>*</Text> : null}
      </View> : null}
      <TextInput
        {...props}
        className={cn(
          "w-fit min-h-8 border-2 border-gray-300 dark:border-gray-600 rounded-lg p-3 text-base text-black dark:text-white bg-white dark:bg-dark-bg",
          isError ? "border-red-500" : ''
        )}
        placeholderTextColorClassName="accent-gray-400 dark:accent-gray-500"
        underlineColorAndroidClassName="accent-transparent"
      />

      {errorText && isError ? <Text className="text-sm text-red-500 mt-1">{errorText}</Text> : null}
    </View>
  )
}
