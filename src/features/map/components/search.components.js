import React, { useContext, useEffect, useState } from 'react';
import {View} from 'react-native'
import {Searchbar} from 'react-native-paper';
import styled from 'styled-components/native';
import { LocationContext } from '../../../services/location/location.context';

const SearchContainer = styled(View)`
  top: ${props => props.theme.space[2]};
  left: ${props => props.theme.space[2]};
  paddingRight: ${props => props.theme.space[3]};
  position: absolute;
  z-index: 999;
  width: 100%;
`;

export const Search = () => {

    const { keyword, search } = useContext(LocationContext) 
    const [searchKeyword, setSearchKeyword] = useState(keyword)

   useEffect(()=>{
    setSearchKeyword(keyword)
   },[keyword])


  return (
    <SearchContainer>
      <Searchbar placeholder="Search for location..." value={searchKeyword} icon='map'
                  onSubmitEditing={
                      () => {
                          search(searchKeyword)
                      }
                  }
                  onChangeText={ (text) => { 
                 
                      setSearchKeyword(text)
                   } }
      />
    </SearchContainer>
  );
};
