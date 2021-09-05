import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { View, Text } from 'react-native'
import SettingsScreen from "../../features/Settings/screens/SettingsScreen"
import SavedListScreen from "../../features/SavedList/screens/SavedListScreen"
import SavedNavigation from './SavedNavigation'

const SettingsNavigation = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} options={{ title: "Settings" }} />
      <Stack.Screen name="SavedNavigation" component={SavedNavigation} options={{ title: "Saved Foods" }} />
    </Stack.Navigator>
  )
}

export default SettingsNavigation
