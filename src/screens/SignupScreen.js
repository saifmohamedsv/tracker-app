import React, { useContext, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { NavigationEvents } from "react-navigation";

const SignupScreen = () => {
  const { signup, state, clearErrorMessage } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <AuthForm
        title={"Create a new account."}
        linkText={"Already have an account? Signin"}
        routeToNavigate={"Signin"}
        onSubmit={(email, password) => signup({ email, password })}
        errorMessage={state.errorMessage}
        buttonText={"Register"}
      />
      <NavLink text={"Already have an account? Login"} route={"Signin"} />
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
