import React from 'react'
import { View, Image, Text } from 'react-native'
import { Card } from 'react-native-paper'
import styled from 'styled-components/native'
import { SvgXml } from 'react-native-svg';
import star from '../../../../assets/star'
import open from '../../../../assets/open'
import { TextTypoGraph } from '../components/typograph/text.component'
import { Favourite } from '../../../components/favourites/favourites.component'
import {
    RestaurantCard,
    RestaurantCardCover,
    Info,
    Section,
    SectionEnd,
    Rating,
    Icon,
    Address,
} from "../components/restaurant-info-card.styles";



export const RestaurantInfoCard = ({ restaurant = {} }) => {
    const {
        name = 'Some Restaurant',
        icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        address = '111 Triều Khúc - Thanh Xuân - Hà Nội',
        isOpenNow = true,
        rating = 3.3,
        placeId,
        isClosedTemporarily = true,
        photos= [],
        opening_hours


    } = restaurant

    const ratingArray = Array.from(new Array(Math.floor(restaurant["rating"])))
    return (
        <RestaurantCard>
          <Favourite restaurant={restaurant} />
            <RestaurantCardCover key={name} source={{ uri: restaurant.photos[0] }} />
            <Info>
                <TextTypoGraph variant="label">{name}</TextTypoGraph>
                <Section>
                    <Rating>
                        {
                            ratingArray.map((_, i ) =>
                                <SvgXml key={`star-${placeId}-${i}`} xml={star} width={23} height={23} />
                       
                            )}
                    </Rating>

                    <SectionEnd>
                        {
                            isClosedTemporarily && (
                                <TextTypoGraph variant="error" style={{ paddingRight: 15, paddingBottom: 5 }} >
                                    CLOSED TEMPORARILY
                                </TextTypoGraph>
                            )}

                        {isOpenNow && <SvgXml xml={open} width={23} height={23} style={{ marginRight: 15 }} />}
                        <Icon source={{ uri: icon }} />

                    </SectionEnd>
                </Section>
                <Address >{restaurant["vicinity"]}</Address>
            </Info>
        </RestaurantCard>
    )
}
