import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import SigninScreen from "./screens/SigninScreen";
import SignupScreen from "./screens/SignupScreen";
import TrackListScreen from "./screens/TrackListScreen";
import TrackCreateScreen from "./screens/TrackCreateScreen";
import AccountScreen from "./screens/AccountScreen";
import TrackDetailScreen from "./screens/TrackDetailScreen";
import { Provider as AuthProvider } from "./context/AuthContext";

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    // Signup: SignupScreen,
    Signin: SigninScreen,
  }),
  mainFlow: createBottomTabNavigator({
    Accout: AccountScreen,
    TrackCreate: TrackCreateScreen,
    TrackListFlow: createStackNavigator({
      TrackDetail: TrackDetailScreen,
      TrackList: TrackListScreen,
    }),
  }),
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};
