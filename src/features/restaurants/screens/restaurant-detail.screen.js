import React, {useState}  from 'react'
import { RestaurantInfoCard } from '../components/restaurant-info-card.components'
import {SafeArea} from '../components/utilites/safe-components.area'
import { List } from 'react-native-paper'
import {ScrollView} from 'react-native'

export const RestaurantDetailScreen =  ( { route } ) => {

    const [breakfastExpanded, setBreakfastExpanded] = useState(false);
    const [lunchExpanded, setLunchExpanded] = useState(false);
    const [dinnerExpanded, setDinnerExpanded] = useState(false);
    const [drinksExpanded, setDrinksExpanded] = useState(false);
  

    const {restaurant} = route.params

    return(
        
        <SafeArea>
        
            <RestaurantInfoCard restaurant={restaurant} />

            <ScrollView>
        <List.Accordion
          title="Breakfast"
          titleStyle = {breakfastExpanded ? {color: 'red'} : {color: 'black'} }
          left={(props) => <List.Icon {...props} icon="bread-slice"  color={breakfastExpanded ? 'red' : 'black'} />}
          expanded={breakfastExpanded}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
        >
          <List.Item title="Eggs Benedict" />
          <List.Item title="Classic Breakfast" />
        </List.Accordion>

        <List.Accordion
          title="Lunch"
          titleStyle = {lunchExpanded ? {color: 'red'} : {color: 'black'} }
          left={(props) => <List.Icon {...props} icon="hamburger" color={lunchExpanded ? 'red' : 'black'}/>}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item title="Burger w/ Fries" />
          <List.Item title="Steak Sandwich" />
          <List.Item title="Mushroom Soup" />
        </List.Accordion>

        <List.Accordion
          title="Dinner"
          titleStyle = {dinnerExpanded ? {color: 'red'} : {color: 'black'} }
          left={(props) => <List.Icon {...props} icon="food-variant" color={dinnerExpanded ? 'red' : 'black'} />}
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
        >
          <List.Item title="Spaghetti Bolognese" />
          <List.Item title="Veal Cutlet with Chicken Mushroom Rotini" />
          <List.Item title="Steak Frites" />
        </List.Accordion>

        <List.Accordion
          title="Drinks"
          titleStyle = {drinksExpanded ? {color: 'red'} : {color: 'black'} }
          left={(props) => <List.Icon {...props} icon="cup"  color={drinksExpanded ? 'red' : 'black'} />}
          expanded={drinksExpanded}
          onPress={() => setDrinksExpanded(!drinksExpanded)}
        >
          <List.Item title="Coffee" />
          <List.Item title="Tea" />
          <List.Item title="Modelo" />
          <List.Item title="Coke" />
          <List.Item title="Fanta" />
        </List.Accordion>
      </ScrollView>

        </SafeArea>
        
    )
}