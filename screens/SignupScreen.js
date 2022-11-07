import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { Text, Button, Input } from "@rneui/themed";
import Spacer from "../components/Spacer";
const SignupScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3 style={{ textAlign: "center" }}>
          Signup for tracker
        </Text>
      </Spacer>

      <Spacer>
        <Input
          label="Email"
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          onChangeText={setEmail}
        />
      </Spacer>
      <Spacer>
        <Input
          label="Password"
          autoCapitalize="none"
          autoCorrect={false}
          value={password}
          secureTextEntry
          onChangeText={setPassword}
        />
      </Spacer>
      <Spacer>
        <Button title={"Signup"} />
      </Spacer>
    </View>
  );
};

export default SignupScreen;

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
  },
});
