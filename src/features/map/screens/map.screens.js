import React, {useContext, useEffect, useState} from 'react';
import MapView from 'react-native-maps';
import styled from 'styled-components/native';
import {Text, View} from 'react-native';
import {LocationContext} from '../../../services/location/location.context';
import {RestaurantsContext} from '../../../services/restaurants/restaurants.context';

import {Search} from '../components/search.components';
import {MapCallout} from '../components/map-callout.component';

const Map = styled(MapView)`
  width: 100%;
  height: 100%;
`;
const SomeText = styled(Text)``;

export const MapScreen = ({navigation}) => {
  const {locations} = useContext(LocationContext);
  const {restaurants} = useContext(RestaurantsContext);
  const [latDelta, setLatDelta] = useState();
  const {lat, lng, viewport} = locations;

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    const latDeltas = northeastLat - southwestLat;
    console.log(latDeltas);
    setLatDelta(latDeltas);
  }, [locations, viewport]);

  return (
    <>
      <Search />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}>
        {restaurants.map(restaurant => {
          return (
            <MapView.Marker
              key={restaurant.name}
              title={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}>
              <MapView.Callout
                onPress={() =>
                  navigation.navigate('RestaurantDetail', {
                    restaurant,
                  })
                }>
                <MapCallout restaurant={restaurant} />
              </MapView.Callout>
            </MapView.Marker>
          );
        })}
      </Map>
    </>
  );
};
