import { Image, ImageSourcePropType, View } from "react-native"
import { ThemedText } from "~/components/ui"

export default function Hero({ title, imageSource }: {
  title: string
  imageSource: ImageSourcePropType | undefined
}) {

  return (
    <View>
      <Image
        source={imageSource}
        className="w-full h-96 rounded-3xl object-cover"
      />

      <ThemedText className="text-2xl font-bold px-6 mt-8 text-center">
        {title}
      </ThemedText>
    </View>
  )
}
