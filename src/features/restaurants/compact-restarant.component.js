import React from 'react';
import styled from 'styled-components/native';
import {WebView} from 'react-native-webview';
import {Platform, Image, Text} from 'react-native';

import {TextTypoGraph} from './components/typograph/text.component';

const CompactImage = styled(Image)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const CompactWebview = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

const isAndroid = Platform.OS === 'android';

export const CompactRestaurantInfo = ({restaurant, isMapView}) => {
  const Image = isMapView && isAndroid ? CompactWebview : CompactImage;
  return (
    <Item>
      <Image source={{uri: restaurant.photos[0]}} />

      <TextTypoGraph center variant="caption" numberOfLines={3}>
        {restaurant.name}
      </TextTypoGraph>
    </Item>
  );
};
