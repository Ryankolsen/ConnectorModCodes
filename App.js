import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import ModCodeList from "./components/ModCodeList";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SearchBarDef from "./components/SearchBarDef";
import InitialList from "./components/InitialList";

export const ModCodeContext = React.createContext();

export default function App() {
  //States
  const [modCodes, setModCodes] = useState(InitialList);
  const [searchedModCodes, setSerchedModCodes] = useState(InitialList);
  const [searchedDef, setSerchedDef] = useState(InitialList);
  // const [serachDefModCode, setSearchedDefModCode] = useState(); future application
  const [renderStatus, setRenderStatus] = useState();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#f0f0ff",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 50,
    },
  });

  function handleDefSearch(enteredCode) {
    const newModCodesDef = [...modCodes];
    if (enteredCode !== "") {
      const searchedDefine = newModCodesDef.filter((mc) =>
        mc.definition
          .toString()
          .toLowerCase()
          .includes(enteredCode.toLowerCase())
      );
      setSerchedDef([...searchedDefine]);
      // setSearchedDefModCode([...searchedDefine]); future application
      setRenderStatus("SearchDefine");
    } else {
      setSerchedDef([...InitialList]);
      // setSearchedDefModCode([...InitialList]); future application
    }
  }

  function handleModCodeSearch(enteredCode) {
    const newModCodes = [...modCodes];
    if (enteredCode !== "") {
      const currsearchedModCodes = newModCodes.filter((mc) =>
        mc.code.toString().toLowerCase().includes(enteredCode.toLowerCase())
      );
      setSerchedModCodes([...currsearchedModCodes]);
      // setSearchedDefModCode([...currsearchedModCodes]); future application
      setRenderStatus("SearchedModCodes");
    } else {
      setSerchedModCodes([...InitialList]);
      // setSearchedDefModCode([...InitialList]); future application
    }
  }
  //need an if statement to handle if component is not mounted yet...
  return (
    <View style={styles.container}>
      <Header />
      <SearchBar handleModCodeSearch={handleModCodeSearch} />
      <SearchBarDef handleDefSearch={handleDefSearch} />

      {renderStatus === "SearchDefine" ? (
        <ModCodeList modCodes={searchedDef} />
      ) : renderStatus === "SearchedModCodes" ? (
        <ModCodeList modCodes={searchedModCodes} />
      ) : (
        <ModCodeList modCodes={modCodes} />
      )}

      <StatusBar style="auto" />
    </View>
  );
}
