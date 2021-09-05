import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import LoginScreen from "../../features/Account/screens/LoginScreen"
import RegisterScreen from "../../features/Account/screens/RegisterScreen"

const AccountNavigation = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  )
}

export default AccountNavigation
