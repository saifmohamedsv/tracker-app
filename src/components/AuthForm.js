import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Text, Button, Input } from "@rneui/themed";
import Spacer from "./Spacer";

const AuthForm = ({ title, onSubmit, errorMessage, buttonText }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <Spacer>
        <Text h3 style={{ textAlign: "center" }}>
          {title}
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

      {errorMessage ? (
        <Spacer>
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        </Spacer>
      ) : null}

      <Spacer>
        <Button title={buttonText} onPress={() => onSubmit(email, password)} />
      </Spacer>
    </>
  );
};

export default AuthForm;

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 16,
    color: "red",
  },
});
