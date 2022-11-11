import tracker from "../api/tracker";
import createDataContext from "./createDataContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { navigate } from "../navigationRef";
import { NavigationEvents } from "react-navigation";

const navigateToMainFlow = () => navigate("TrackList");

const authReducer = (state, action) => {
  switch (action.type) {
    case "error":
      return { ...state, errorMessage: action.payload };
    case "login":
      return { ...state, token: action.payload, errorMessage: "" };
    case "clear_error":
      return { ...state, errorMessage: "" };
    default:
      return state;
  }
};

const tryLocalSignin = (dispatch) => async () => {
  const token = await AsyncStorage.getItem("token");

  if (token) {
    dispatch({ type: "login", payload: token });
    navigateToMainFlow();
    return;
  }
  navigate("Signup");
};

const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: "clear_error", payload: "" });
};

const signup =
  (dispatch) =>
  async ({ email, password, callback }) => {
    try {
      const { data } = await tracker.post("/signup", { email, password });
      await AsyncStorage.setItem("token", data.token);
      dispatch({ type: "login", payload: data.token });
      navigateToMainFlow();
    } catch (error) {
      dispatch({
        type: "error",
        payload: "Something went wrong while trying to signup...",
      });
    }
  };

const signin =
  (dispatch) =>
  async ({ email, password }) => {
    try {
      const { data } = await tracker.post("/signin", { email, password });
      await AsyncStorage.setItem("token", data.token);
      dispatch({ type: "login", payload: data.token });
      navigateToMainFlow();
    } catch (error) {
      dispatch({
        type: "error",
        payload: "Something went wrong while trying to signup...",
      });
    }
  };

const signout = (dispatch) => {
  return () => {};
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup, clearErrorMessage, tryLocalSignin },
  { isSignedIn: false, errorMessage: "", token: null }
);
