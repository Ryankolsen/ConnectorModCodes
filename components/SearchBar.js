import React, { useContext } from 'react'
import { View, TextInput, StyleSheet} from 'react-native';


function SearchBar({ handleModCodeSearch }) {
  const styles = StyleSheet.create({
    seatchBox: {
      borderColor:  '#000002',
      borderWidth: 2,
      paddingRight: 10,
      paddingLeft: 10,
      marginTop:20,
    }
})
    
  return (
    <View>
        <TextInput 
        style={styles.seatchBox}
        htmlFor='search'
        type="text" 
        placeholder="Search by Mod Code" 
        onChangeText={newText => handleModCodeSearch(newText.toString())}
        // onChangeText={(e) => handleModCodeSearch({searchName: e.target.value.toString()}, { modCodes })}
    />
    </View>
  )
}

export default SearchBar