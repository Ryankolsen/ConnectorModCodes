import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ModCodeList from './components/ModCodeList';
import Header from './components/Header';
import SearchBar from './components/SearchBar';

export const ModCodeContext = React.createContext()

export default function App() {

  //States
  const [modCodes, setModCodes] = useState(modCodeList)
  const [searchedModCodes, setSerchedModCodes] = useState()

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop:50, 
    },
  });


  const ModCodeContextValue = {
    handleModCodeSearch,
  }

function handleModCodeSearch( enteredCode ){
  const newModCodes = [...modCodes]
  if(enteredCode !== ''){
    const searchedModCodes = newModCodes.filter(mc =>  mc.code.toString().toLowerCase().includes(enteredCode.toLowerCase()))
    setSerchedModCodes([...searchedModCodes])  
  }else{setSerchedModCodes([...modCodes])}
}


  return (
    <View style={styles.container}>
      <Header />
      <SearchBar handleModCodeSearch={handleModCodeSearch} />
      {searchedModCodes && <ModCodeList modCodes={searchedModCodes}/>}
      {!searchedModCodes && <ModCodeList modCodes={modCodes}/>}
      
      <StatusBar style="auto" />
    </View>
    

  );
}

const modCodeList = [
  //Spacecraft
  {id: 1, code: 'HBA', definition: 'Black anodized plating', company: 'Spacecraft', series: 'SCPB'},
  {id: 2, code: '027', definition: 'Conductive black zinc cobalt plating', company: 'Spacecraft', series: 'SCPB'},
  {id: 3, code: '005', definition: 'Black anodized plating', company: 'Spacecraft', series: 'SCPB'},
  {id: 4, code: 'F80', definition: 'Crimp plated contacts', company: 'Spacecraft', series: 'SCPB'},
  {id: 5, code: 'A95', definition: 'Gold plated contacts', company: 'Spacecraft', series: 'SCPB'},
  
  //AB Conn
  {id: 6, code: 'M11', definition: 'Zinc cobalt olive drab', company: 'AB Conn', series: 'ABCIR'},
  {id: 7, code: 'M115', definition: 'Zinc cobalt olive drab', company: 'AB Conn', series: 'ABCIR'},
  {id: 8, code: 'M133', definition: 'Countersunk imperial holes', company: 'AB Conn', series: 'ABCIR'},
  {id: 9, code: 'M134', definition: 'Black epoxy varnish', company: 'AB Conn', series: 'ABCIR'},
  {id: 10, code: 'M14', definition: 'Connector with size 16 AWG contact buckets', company: 'AB Conn', series: 'ABCIR'},
  {id: 11, code: 'M141', definition: 'Connector with size 22 AWG contact buckets', company: 'AB Conn', series: 'ABCIR'},
  {id: 12, code: 'M145', definition: 'M32 and M52', company: 'AB Conn', series: 'ABCIR'},
  {id: 13, code: 'M263', definition: 'Stainless Steel', company: 'AB Conn', series: 'ABCIR'},
  {id: 14, code: 'M253', definition: 'Stainless Steel', company: 'AB Conn', series: 'ABCIR'},
  {id: 15, code: 'M32', definition: 'Black zinc cobalt and through MTG holes', company: 'AB Conn', series: 'ABCIR'},
  {id: 16, code: 'M34', definition: 'Black zinc cobalt ', company: 'AB Conn', series: 'ABCIR'},
  {id: 17, code: 'P3', definition: 'Gold plated contacts', company: 'AB Conn', series: 'ABCIR'},
  {id: 18, code: 'V0', definition: 'Without contacts', company: 'AB Conn', series: 'ABCIR'},
  {id: 19, code: 'C4', definition: 'SIZE 16 CONTACT WITH A 12-14 AWG BUCKET (3626) CONTACT', company: 'AB Conn', series: 'ABCIR'},
  
  

  
]

