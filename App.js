import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Splash from "./src/main/Splash";
import Home from "./src/main/Home";

const Stack = createNativeStackNavigator()

function App() {
  return(
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Splash' component={Splash} options={{headerShown: false}} />
            <Stack.Screen name='Home' component={Home} options={{headerShown: false}} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;