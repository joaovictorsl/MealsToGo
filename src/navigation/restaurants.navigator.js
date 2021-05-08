import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home';

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      headerMode="none">
      <RestaurantStack.Screen
        name="Restaurants"
        component={HomeScreen} />
    </RestaurantStack.Navigator>
  )
}