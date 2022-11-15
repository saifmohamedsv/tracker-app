import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect } from "react";
import { Context as AuthContext } from "../context/AuthContext";

const ResolveAuthScreen = () => {
  const { tryLocalSignin } = useContext(AuthContext);

  useEffect(() => {
    tryLocalSignin();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Loadinng...</Text>
    </View>
  );
};

ResolveAuthScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

export default ResolveAuthScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
