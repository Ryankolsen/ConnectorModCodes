import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useFonts } from 'expo-font';
import ModCode from './ModCode';


function ModCodeList({ modCodes }) {

    const [loaded] = useFonts({
        Akaya: require('../fonts/AkayaTelivigala.ttf')
      });

      const styles = StyleSheet.create({
        container: {
            marginTop:50,
            fontFamily: 'Akaya',
        }
    })

    const renderItem = ({ item }) => ( 
       
          <ModCode 
          key={item.id}
          {...item}
          />
    )


    if (!loaded) {
        return (
            <FlatList            
            data={modCodes}
            renderItem={renderItem}
        />
        
            )
      } else {
        return (
        <FlatList
            style={styles.container}
            data={modCodes}
            renderItem={renderItem}
        />   
      
      )}
    }

export default ModCodeList