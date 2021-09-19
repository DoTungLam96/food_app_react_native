import React, {useContext, useEffect, useState} from 'react';
import {View} from 'react-native';
import {Searchbar} from 'react-native-paper';
import styled from 'styled-components/native';
import searchIcon from '../../../../assets/ic_search.png';
import {LocationContext} from '../../../services/location/location.context';

const SearchContainer = styled(View)`
  padding: ${props => props.theme.space[3]};
`;

export const Search = ({isFavouriteToggle, onFavouriteToggle}) => {
  const {keyword, search} = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);
  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search for location..."
        value={searchKeyword}
        icon={isFavouriteToggle ? 'heart' : 'heart-outline'}
        onIconPress={onFavouriteToggle}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={text => {
          setSearchKeyword(text);
        }}
      />
    </SearchContainer>
  );
};
