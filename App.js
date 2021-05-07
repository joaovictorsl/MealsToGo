import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/theme'
import HomeScreen from './src/screens/home';
import { useFonts as useOswald, Oswald_400Regular, Oswald_700Bold } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular, Lato_700Bold } from '@expo-google-fonts/lato';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingsScreen from './src/screens/settings';
import MapScreen from './src/screens/map';
import { Ionicons } from '@expo/vector-icons';
import { RestaurantsContextProvider } from './src/services/restaurants/restaurants.context'

const Tab = createBottomTabNavigator();
let iconName;

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
    Oswald_700Bold
  })
  const [latoLoaded] = useLato({
    Lato_400Regular,
    Lato_700Bold
  })
  if (!oswaldLoaded || !latoLoaded) {
    return null
  }

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

  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <RestaurantsContextProvider>
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={atmScreen}
              tabBarOptions={{
                showLabel: false,
              }}
            >
              <Tab.Screen name="Restaurants" component={HomeScreen} />
              <Tab.Screen name="Map" component={MapScreen} />
              <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
          </NavigationContainer>
        </RestaurantsContextProvider>
      </ThemeProvider>
    </Fragment>
  );
}
