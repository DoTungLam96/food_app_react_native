import React, {createContext, useState,useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

export const FavouritesContext = createContext()
export const FavouritesContextProvider = ({children}) => {

    const saveFavourites = async (value) => {
        try {
          const jsonValue = JSON.stringify(value);
          await AsyncStorage.setItem("@favourites", jsonValue);
        } catch (e) {
          console.log("error storing", e);
        }
      };
    
      const loadFavourites = async () => {
        try {
          const value = await AsyncStorage.getItem("@favourites");
          if (value !== null) {
            setFavourites(JSON.parse(value));
          }
        } catch (e) {
          console.log("error loading", e);
        }
      };

        const [favourites, setFavourites] = useState([])

        const addFavourites = (restaurant) => {
            console.log('add favourite')
            setFavourites([...favourites, restaurant])
        }
        const removeFavourites = (restaurant) =>{
            console.log('remove Favourites ')
            const newFavourites = favourites.filter( (x) => x.placeId !== restaurant.placeId)
            setFavourites(newFavourites)
        }     
        useEffect(() => {
            loadFavourites();
          }, []);
        
          useEffect(() => {
            saveFavourites(favourites);
          }, [favourites]);
        
    return(
        <FavouritesContext.Provider value= {{
            favourites,
            addFavourites,
            removeFavourites,
        }}>
            {children}
        </FavouritesContext.Provider>
    )
}
