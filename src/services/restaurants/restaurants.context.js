import React, { useState, useEffect, useMemo, createContext } from 'react';
import { restaurantsRequest, restaurantTransform } from './restaurants.service';

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {

  const [restaurants, setRestaurants] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const retrieveRestaurants = () => {
    setIsLoading(true);
    setTimeout(() => {
      restaurantsRequest().then(restaurantTransform).then(results => {
        setRestaurants(results)
        setIsLoading(false)
      }).catch(err => {
        setIsLoading(false)
        setError(err)
      })
    }, 2000)
  }

  useEffect(() => {
    retrieveRestaurants();
  }, [])
  return (
    <RestaurantsContext.Provider value={{
      restaurants,
      isLoading,
      error,
    }}>
      {children}
    </RestaurantsContext.Provider>
  )
}