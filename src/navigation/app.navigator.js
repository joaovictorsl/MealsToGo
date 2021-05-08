import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import SettingsScreen from '../screens/settings';
import MapScreen from '../screens/map';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { RestaurantsNavigator } from './restaurants.navigator'

const Tab = createBottomTabNavigator();

let iconName;

const atmScreen = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    iconName;
    switch (route.name) {
      case 'Restaurants':
        iconName = focused ? 'restaurant' : 'restaurant-outline'
        color = '#D0421B'
        break;
      case 'Settings':
        iconName = focused ? 'settings' : 'settings-outline'
        color = '#D0421B'
        break;
      case 'Map':
        iconName = focused ? 'map' : 'map-outline'
        color = '#D0421B'
        break;

      default:
        break;
    }

    return <Ionicons name={iconName} size={24} color={color} />;
  },
})

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={atmScreen}
        tabBarOptions={{
          showLabel: false,
        }}
      >
        <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
