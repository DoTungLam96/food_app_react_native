import React from 'react';
import {Text} from 'react-native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {RestaurantScreen} from '../../features/restaurants/screens/restautant.screens';
import {RestaurantDetailScreen} from '../../features/restaurants/screens/restaurant-detail.screen';

const RestaurantStack = createStackNavigator();

export const RestaurantNavigator = () => {
  return (
    <RestaurantStack.Navigator
      headerMode="none"
      screenOptions={{
        ...TransitionPresets.ModalSlideFromBottomIOS,
      }}>
      <RestaurantStack.Screen name="Restaurants" component={RestaurantScreen} />

      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetailScreen}
      />
    </RestaurantStack.Navigator>
  );
};
