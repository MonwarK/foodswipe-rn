import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
import SettingsNavigation from "./SettingsNavigation";
import FoodSwipeNavigation from "./FoodSwipeNavigation";
import { MealsContextProvider } from "../../services/meals/MealsContext";
import { Colors } from "react-native-paper";

const AppNavigation = () => {
  const TAB_ICONS = {
    FoodSwipeNavigation: "fast-food",
    SettingsNavigation: "settings"
  };

  const Tab = createBottomTabNavigator()

  const screenOptions = ({route}) => ({
    tabBarIcon: ({ color, size }) => {
        let iconName = TAB_ICONS[route.name];
        return <Ionicons name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: 'white',
    tabBarInactiveTintColor: Colors.grey400,
    headerShown: false,
    tabBarActiveBackgroundColor: Colors.green500,
    tabBarInactiveBackgroundColor: Colors.green500
  })
  
  return (
    <MealsContextProvider>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name="FoodSwipeNavigation" component={FoodSwipeNavigation} options={{ title: "Finds Foods" }} />
        <Tab.Screen name="SettingsNavigation" component={SettingsNavigation} options={{ title: "Settings" }} />
      </Tab.Navigator>
    </MealsContextProvider>
  )
}

export default AppNavigation;