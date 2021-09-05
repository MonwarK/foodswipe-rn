import React from 'react'
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import FoodSwipeScreen from "../../features/FoodSwipe/screens/FoodSwipeScreen"
import FoodDescription from '../../features/FoodSwipe/screens/FoodDescription';

const FoodSwipeNavigation = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="FoodSwipeScreen" component={FoodSwipeScreen} />
      <Stack.Screen name="FoodDescriptionScreen" component={FoodDescription} options={TransitionPresets.ModalTransition} />
    </Stack.Navigator>
  )
}

export default FoodSwipeNavigation
