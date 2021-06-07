import React, {useContext, useState} from 'react';
import {View, TouchableOpacity, SafeAreaView, FlatList} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import {RestaurantInfoCard} from '../components/restaurant-info-card.components';
import styled from 'styled-components/native';
import {RestaurantsContext} from '../../../services/restaurants/restaurants.context';
import {Search} from '../components/search.component';
import {FavouritesContext} from '../../../services/favourites/favourite.context';
import { FavouriteBar } from '../../../components/favourites/favourite-bar.component'
const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${
    '' /* ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}; */
  }
  backgroundColor: white
`;

const RestaurantLisContainer = styled(View)`
        padding: ${props => props.theme.space[3]}
        flex: 1;
        marginTop:${props => props.theme.space[1]}
`;

const RestautantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 2,
  },
})``;
const Loading = styled(ActivityIndicator)`
   marginLeft: -25px;
`;
const LoadingContainer = styled(View)`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantScreen = ({navigation}) => {
  const {isLoading, error, restaurants} = useContext(RestaurantsContext);
  const [onToggle, setOnToggle] = useState(false);

  const {favourites} = useContext(FavouritesContext);

  return (
    <>
      <SafeArea>
        {isLoading && (
          <LoadingContainer>
            <Loading size={50} animating={true} color="red" />
          </LoadingContainer>
        )}
        <Search
          isFavouriteToggle={onToggle}
          onFavouriteToggle={() => setOnToggle(!onToggle)}
        />
        {
            onToggle && <FavouriteBar favourites ={favourites} onNavigate={navigation.navigate} />
        }
        <RestaurantLisContainer>
          <RestautantList
            data={restaurants}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('RestaurantDetail', {
                      restaurant: item,
                    })
                  }>
                  <RestaurantInfoCard restaurant={item} />
                </TouchableOpacity>
              );
            }}
            keyExtractor={item => item.name}
          />
        </RestaurantLisContainer>
      </SafeArea>
    </>
  );
};
