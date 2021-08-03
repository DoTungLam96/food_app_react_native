import React from 'react';
import {TouchableOpacity, ScrollView, View} from 'react-native';
import styled from 'styled-components/native';
import {Spacer} from '../../../src/features/restaurants/components/spacer/spacer.component';
import {CompactRestaurantInfo} from '../../features/restaurants/compact-restarant.component';
import {TextTypoGraph} from '../../features/restaurants/components/typograph/text.component';
const FavouritesWrapper = styled(View)`
  padding: 10px;
`;

export const FavouriteBar = ({favourites, onNavigate}) => {
  return (
    <FavouritesWrapper>
      <TextTypoGraph center variant="body" numberOfLines={3}>
        Favourites
      </TextTypoGraph>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map(restaurant => {
          const key = restaurant.name;
          return (
            <TouchableOpacity
              key={key}
              onPress={() =>
                onNavigate('RestaurantDetail', {
                  restaurant,
                })
              }>
              <Spacer position="left" size="medium">
                <CompactRestaurantInfo
                  restaurant={restaurant}
                  isMapView={false}
                />
              </Spacer>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
};
