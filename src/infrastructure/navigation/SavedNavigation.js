import React from 'react'
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import FoodDescription from '../../features/FoodSwipe/screens/FoodDescription';
import SavedListScreen from '../../features/SavedList/screens/SavedListScreen';

const SavedNavigation = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SavedListScreen" component={SavedListScreen} />
      <Stack.Screen name="SavedDescriptionScreen" component={FoodDescription} options={TransitionPresets.ModalTransition} />
    </Stack.Navigator>
  )
}

export default SavedNavigation
