import { useMemo, useEffect } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const Maps = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBcqjEOQLLZRTG1UArjXnFHMmn45ZNJQIk",
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
};

const Map = () => {
  const center = useMemo(() => ({ lat: 41.7685, lng: -8.58328 }), []);

  return (
    <GoogleMap
      zoom={16}
      center={center}
      mapContainerClassName="w-[100%] h-[100%]"
    >
      <Marker position={center} />
    </GoogleMap>
  );
};

export default Maps;
