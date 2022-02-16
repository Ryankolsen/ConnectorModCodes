import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView} from 'react-native';
import { useFonts } from 'expo-font';


function ModCode(props) {
    const [loaded] = useFonts({
        Akaya: require('../fonts/AkayaTelivigala.ttf')
      });
    
    
    
    const styles = StyleSheet.create({
        container: {
            backgroundColor: '#A5C4EC', 
            borderColor:  '#000002',
            borderWidth: 2,
        }, textname:{
            fontSize: 25,
            color: '#000000',
            fontFamily: 'Akaya',
        }, textDefinition:{
            fontSize: 25,
            color: '#000000',
            fontFamily: 'Akaya',
        }
    })
    
    const{
        id, 
        code,
        definition,
        company
    } = props

    if (!loaded) {
        return (<Text>Oops</Text>)
      } else {
        return (
    <View style={styles.container}>
        <Text style={styles.textname}>Code: {code}</Text>
        <Text style={styles.textDefinition}>Definition: {definition}</Text> 
        <Text style={styles.textDefinition}>Company: {company}</Text>
    </View>
  )
}}

export default ModCode