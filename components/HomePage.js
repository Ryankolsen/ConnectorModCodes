import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  Platform,
  StatusBar,
  Button,
  ImageBackground,
  View,
} from "react-native";
import { useFonts } from "expo-font";

const styles = StyleSheet.create({
  container: {
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    backgroundColor: "#f0f0ff",
    alignItems: "center",
    justifyContent: "center",
  },
  ImageBackground: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  headerText: {
    fontSize: 75,
    fontFamily: "Caveat",
    marginTop: 5,
  },
  paraText: {
    fontSize: 25,
    backgroundColor: "#fff",
  },
  buttonMod: {
    borderWidth: 1.5,

    borderRadius: 5,
    borderColor: "#f0f8ff",
    marginTop: 350,
  },
});

const backgroundImage = require("../assets/Train2.jpg");

export default function HomePage({ navigation }) {
  const [loaded] = useFonts({
    Caveat: require("../fonts/Caveat.ttf"),
  });
  if (!loaded) {
    return <Text>Loading</Text>;
  }
  {
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={backgroundImage}
          style={styles.ImageBackground}
        >
          <Text style={styles.headerText}>Home </Text>
          <Text style={styles.paraText}></Text>
          <View style={styles.buttonMod}>
            <Button
              title="Mod Code List"
              onPress={() => navigation.navigate("Mod Codes")}
              accessibilityLabel="click here for modification code list"
              color="#6b1027"
            ></Button>
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}
