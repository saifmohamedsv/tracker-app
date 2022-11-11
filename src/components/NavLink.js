import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Spacer from "./Spacer";
import { Text } from "@rneui/themed";
import { withNavigation } from "react-navigation";

const NavLink = withNavigation(({ text, route, navigation: { navigate } }) => {
  return (
    <Spacer>
      <TouchableOpacity onPress={() => navigate(route)}>
        <Text h5 style={styles.link}>
          {text}
        </Text>
      </TouchableOpacity>
    </Spacer>
  );
});

export default NavLink;

const styles = StyleSheet.create({
  link: {
    color: "blue",
  },
});
