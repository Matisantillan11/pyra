import { ReactNode } from "react";
import { MapView, MarkerPressEvent } from "./types";

export default function Map({
  children,
  ref,
  showsUserLocation = true
}: {
  children?: ReactNode,
  ref?: React.RefObject<MapView | null>
  showsUserLocation?: boolean
}) {
  const flyToMarker = ({
    coordinate,
    duration = 1000
  }: {
    coordinate: { latitude: number; longitude: number },
    duration?: number
  }) => {
    if (!ref?.current) return;

    ref?.current?.animateToRegion(
      {
        ...coordinate,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      },
      duration
    );
  };

  const onGetMarkerCoordinates = (event: MarkerPressEvent) => {
    return event.nativeEvent.coordinate;
  };

  return (
    <MapView
      ref={ref}
      style={{ position: 'relative', width: '100%', height: '100%' }}
      showsUserLocation={showsUserLocation}
      showsMyLocationButton
    >
      {children}
    </MapView>
  );
}
