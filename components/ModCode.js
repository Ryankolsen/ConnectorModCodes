import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";

function ModCode(props) {
  const [loaded] = useFonts({
    PTSansNarrow: require("../fonts/PTSansNarrowRegular.ttf"),
  });

  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#bddef0",
      borderColor: "#000002",
      borderWidth: 2,
    },
    textname: {
      fontSize: 25,
      color: "#000000",
      fontFamily: "PTSansNarrow",
    },
    textDefinition: {
      fontSize: 25,
      color: "#000000",
      fontFamily: "PTSansNarrow",
    },
  });

  const { id, code, definition, company } = props;

  if (!loaded) {
    return <Text>Please wait</Text>;
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.textname}>Code: {code}</Text>
        <Text style={styles.textDefinition}>Definition: {definition}</Text>
        <Text style={styles.textDefinition}>Company: {company}</Text>
      </View>
    );
  }
}

export default ModCode;
