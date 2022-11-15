import { StyleSheet, Text } from "react-native";
import React, { useContext } from "react";
import { Button } from "@rneui/themed";
import { Context as AuthContext } from "../context/AuthContext";
import Spacer from "../components/Spacer";
import { SafeAreaView } from "react-navigation";

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Spacer>
        <Text style={{ fontSize: 48 }}>Account</Text>
      </Spacer>
      <Spacer>
        <Button title={"Signout"} onPress={signout} />
      </Spacer>
    </SafeAreaView>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({});
