import React from 'react'
import styled from 'styled-components/native'
import { Text } from 'react-native'
import { CompactRestaurantInfo } from '../../restaurants/compact-restarant.component'

export const MapCallout = ({ restaurant }) => {
    return(
        <CompactRestaurantInfo restaurant= {restaurant} isMapView={true} />
    )
}