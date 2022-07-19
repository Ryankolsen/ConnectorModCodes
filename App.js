import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { AppRegistry } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";

import ModCodeListLogic from "./components/ModCodeListLogic";
import HomePage from "./components/HomePage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="Mod Codes" component={ModCodeListLogic} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
