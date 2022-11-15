import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import MapView, { Polyline, Circle } from "react-native-maps";
import { Context } from "../context/LocationContext";
const Map = () => {
  const {
    state: { currentLocation },
  } = useContext(Context);

  if (!currentLocation)
    return (
      <ActivityIndicator
        size="large"
        color={"violet"}
        style={{ marginTop: 400 }}
      />
    );

  initialLocation = {
    longitude: -122.0312186,
    latitude: 37.33233141,
  };

  console.log(currentLocation);

  return (
    <MapView
      style={{ height: 460 }}
      initialRegion={{
        ...initialLocation,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
      region={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      <Circle
        center={currentLocation.coords}
        strokeColor={"rgba(158, 158, 255, 1)"}
        fillColor={"rgba(158, 158, 255, 0.3)"}
        radius={72}
      />
      <Polyline strokeWidth={5} />
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({});
