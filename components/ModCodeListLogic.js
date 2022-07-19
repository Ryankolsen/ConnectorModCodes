import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Platform,
  StatusBar,
  Text,
} from "react-native";
// import Icon from "react-native-vector-icons/FontAwesome";
import { RadioButton } from "react-native-paper";

import ModCodeList from "./ModCodeList";
import Header from "./Header";
import SearchBar from "./SearchBar";
import SearchBarDef from "./SearchBarDef";
import InitialList from "./InitialList";

export default function ModCodeListLogic() {
  //States
  const [checked, setChecked] = useState("ModCode");
  const [modCodes, setModCodes] = useState(InitialList);
  const [searchedModCodes, setSerchedModCodes] = useState(InitialList);
  const [searchedDef, setSerchedDef] = useState(InitialList);
  // const [serachDefModCode, setSearchedDefModCode] = useState(); future application
  const [renderStatus, setRenderStatus] = useState();

  const styles = StyleSheet.create({
    container: {
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      flex: 1,
      backgroundColor: "#f0f0ff",
      alignItems: "center",
      justifyContent: "center",
    },
    radioBtnContainer: {
      flexDirection: "row",
    },
    radioText: {
      marginTop: 7,
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
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.radioBtnContainer}>
        <RadioButton
          value="ModCode"
          status={checked === "ModCode" ? "checked" : "unchecked"}
          onPress={() => setChecked("ModCode")}
        />
        <Text style={styles.radioText}>Search By Mod Code</Text>
      </View>
      <View style={styles.radioBtnContainer}>
        <RadioButton
          value="Def"
          status={checked === "Def" ? "checked" : "unchecked"}
          onPress={() => setChecked("Def")}
        />
        <Text style={styles.radioText}>Search By Definition</Text>
      </View>

      {/* SearchBar */}
      {checked === "ModCode" ? (
        <SearchBar handleModCodeSearch={handleModCodeSearch} />
      ) : null}
      {checked === "Def" ? (
        <SearchBarDef handleDefSearch={handleDefSearch} />
      ) : null}

      {/* Mod Code List */}
      {renderStatus === "SearchDefine" ? (
        <ModCodeList modCodes={searchedDef} />
      ) : renderStatus === "SearchedModCodes" ? (
        <ModCodeList modCodes={searchedModCodes} />
      ) : (
        <ModCodeList modCodes={modCodes} />
      )}
    </SafeAreaView>
  );
}
