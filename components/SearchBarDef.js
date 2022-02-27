import React, { useContext } from 'react'
import { View, TextInput, StyleSheet} from 'react-native';


function SearchBarDef({ handleDefSearch }) {
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
        placeholder="Search by Definition" 
        aria-label="Search by Definition" 
        onChangeText={newText => handleDefSearch(newText.toString())}
    />
    </View>
  )
}

export default SearchBarDef