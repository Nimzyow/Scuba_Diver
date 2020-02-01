import React from "react";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import PlanScreen from "./components/screens/plan/Plan";

import DiverTableState from "./context/diverTable/diverTableState";

const MainNavigator = createStackNavigator(
  {
    Home: { screen: PlanScreen }
  },
  {
    defaultNavigationOptions: {
      headerTintColor: "black",
      headerStyle: {
        backgroundColor: "#74B9FF"
      }
    }
  }
);

const AppContainer = createAppContainer(MainNavigator);

const App = () => {
  return (
    <DiverTableState>
      <AppContainer />
    </DiverTableState>
  );
};

export default App;
