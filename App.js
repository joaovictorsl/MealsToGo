import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/theme'
import { useFonts as useOswald, Oswald_400Regular, Oswald_700Bold } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular, Lato_700Bold } from '@expo-google-fonts/lato';
import { Navigation } from './src/navigation'
import { RestaurantsContextProvider } from './src/services/restaurants/restaurants.context'
import { LocationContextProvider } from './src/services/location/location.context'

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



  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <Navigation />
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
    </Fragment>
  );
}
