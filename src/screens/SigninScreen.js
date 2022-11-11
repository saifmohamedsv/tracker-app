import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { Context } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { NavigationEvents } from "react-navigation";

const SigninScreen = () => {
  const { signin, state, clearErrorMessage } = useContext(Context);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <AuthForm
        title={"Signin to your account"}
        linkText={"New User? Signup"}
        routeToNavigate={"Signup"}
        onSubmit={(email, password) => signin({ email, password })}
        errorMessage={state.errorMessage}
        buttonText={"Login"}
      />
      <NavLink text={"New User? Create An Account."} route={"Signup"} />
    </View>
  );
};

export default SigninScreen;

SigninScreen.navigationOptions = () => {
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
