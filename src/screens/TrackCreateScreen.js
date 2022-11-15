import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Text } from "@rneui/themed";
import { withNavigationFocus, SafeAreaView } from "react-navigation";
//
import Map from "../components/Map";
import Spacer from "../components/Spacer";
import useLocation from "../hooks/useLocation";
import { Context } from "../context/LocationContext";

const TrackCreateScreen = withNavigationFocus(({ isFocused }) => {
  const { addLocation } = useContext(Context);
  const [err] = useLocation(addLocation, isFocused);

  return (
    <SafeAreaView forceInset={{ top: "never" }}>
      <Map />
      {err && (
        <Spacer>
          <Text h3 style={{ color: "red" }}>
            Please Accept Location Permission.
          </Text>
        </Spacer>
      )}
    </SafeAreaView>
  );
});

export default TrackCreateScreen;

const styles = StyleSheet.create({});
