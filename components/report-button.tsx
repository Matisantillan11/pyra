import { VolumeOnIcon } from "./icons";
import { Button } from "./ui";

export default function ReportButton({ onPress }: { onPress: () => void }) {
  return <Button
    onPress={onPress}
    className="absolute h-16 w-16 bottom-24 right-6 bg-red-600 shadow-2xl z-50 rounded-full items-center justify-center"
  >
    <VolumeOnIcon color="white" strokeWidth={2} />
  </Button>
}
