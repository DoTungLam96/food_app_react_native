import React, { useState, useEffect } from 'react'
import {locationRequest, locationTransform } from './location.services'

export const LocationContext = React.createContext()

export const LocationContextProvider = ( {children} ) => {
    console.log("--LocationContext--")
    const [locations, setLocations] = useState([])
    const [keyword, setKeyword] = useState("chicago")
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const onSearch = (searchKeyword) =>{
        console.log("--onSearch LocationContext--")
        setIsLoading(true)
        setKeyword(searchKeyword)
      
    }

    useEffect( () => {
      console.log('--useEffect_LocationContext--')
      if (!keyword.length) {
        // don't do anything
        return;
      }
    locationRequest(keyword.toLowerCase()).then(locationTransform)
    .then( (result) => {
        setIsLoading(false)
        setLocations(result)
    }).catch( (err) =>{
        setIsLoading(false)
        setError(err)
        console.log(err)
    })
    },[keyword] )

    return (
        <LocationContext.Provider
            value = {{
                isLoading,
                error,
                locations,
                search: onSearch,
                keyword,
            }}>
            {children}
        </LocationContext.Provider>
    )

} 