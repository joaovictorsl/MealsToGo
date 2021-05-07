import React, { useContext, useState } from 'react'
import { Searchbar } from 'react-native-paper';
import { LocationContext } from '../../services/location/location.context';
import { SearchbarView } from '../../styles/styles';

export const Search = () => {

  const { keyword, search } = useContext(LocationContext);

  const [searchKeyword, setSearchKeyword] = useState(keyword)

  return (
    <SearchbarView>
      <Searchbar
        placeholder='Search for a location...'
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={text => {
          setSearchKeyword(text)
        }}
      />
    </SearchbarView>
  )
}