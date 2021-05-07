import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import React, { Fragment, useContext } from 'react';
import { FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { RestaurantInfo } from '../components/restaurant-card';
import { SafeArea, Container, SearchbarView, CardView, ActivityIndicator } from '../styles/styles';
import { RestaurantsContext } from '../services/restaurants/restaurants.context'


const HomeScreen = () => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext)

  return (
    <Fragment>
      <SafeArea>
        <Container>
          <SearchbarView>
            <Searchbar placeholder='Search...' />
          </SearchbarView>
          <CardView>
            {isLoading
              ?
              <ActivityIndicator animating={true} color='#D0421B' size={200} />
              :
              <FlatList
                data={restaurants}
                renderItem={({ item }) => {
                  return (<RestaurantInfo
                    icon={item.icon}
                    name={item.name}
                    address={item.vicinity}
                    isOpenNow={item.isOpenNow}
                    rating={item.rating}
                    isClosedTemporarily={item.isClosedTemporarily} />)
                }}
                keyExtractor={(item) => item.name}
                contentContainerStyle={{ padding: 5 }} />
            }
          </CardView>
        </Container>
      </SafeArea>
      <ExpoStatusBar style='auto' />
    </Fragment>
  )
}
export default HomeScreen;