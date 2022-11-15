import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import AccountScreen from "./src/screens/AccountScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import { setNavigator } from "./src/navigationRef";
import ResolveAuthScreen from "./src/screens/LoadingScreenn";
import { Provider as AuthProvider } from "./src/context/AuthContext.js";
import { Provider as LocationProvider } from "./src/context/LocationContext";

const switchNavigator = createSwitchNavigator({
  Resolve: ResolveAuthScreen,
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen,
  }),
  mainFlow: createBottomTabNavigator({
    TrackCreate: TrackCreateScreen,
    TrackListFlow: createStackNavigator({
      TrackDetail: TrackDetailScreen,
      TrackList: TrackListScreen,
    }),
    Account: AccountScreen,
  }),
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <LocationProvider>
      <AuthProvider>
        <App ref={setNavigator} />
      </AuthProvider>
    </LocationProvider>
  );
};
