import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "./screens/HomeScreen";

const navigation = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: { title: "Life Tracker" },
  }
);

export default createAppContainer(navigation);
