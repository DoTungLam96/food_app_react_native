import React, { useState, createContext, useEffect, useMemo, useContext } from "react";
import { LocationContext } from "../location/location.context";

import {   restaurantsRequest,
  restaurantsTransform,} from "./restaurants.services";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {

  console.log("--RestaurantsContext--")

  const [restaurants, setRestaurants] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const { locations } = useContext(LocationContext)

  const retrieveRestaurants = (location) => {

    console.log("--retrieveRestaurants--")

    const locationString = `${location.lat},${location.lng}`
    setIsLoading(true)
    setRestaurants([])
    setTimeout(
      () => {
        restaurantsRequest(locationString).then(restaurantsTransform)
          .then((results) => {

            setIsLoading(false)
            setRestaurants(results)
            
          }).catch(error => {
            setIsLoading(false)
            setError(error)
          })
      }, 2000)
  }

  useEffect(() => {
    if(locations){
      retrieveRestaurants(locations)
    }
  }, [locations])

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        isLoading,
        error
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};