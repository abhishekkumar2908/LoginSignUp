import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View, 
} from "react-native";
import Login from './src/screen/Login';
import SignUp from "./src/screen/SignUp";
import {NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { color } from "react-native-reanimated";

const Stack = createNativeStackNavigator();
export default function App() {
 
  return (
      // <View style={styles.container}>
      //   <Login />
      // </View>
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name = "login" component={Login}
         options={
          {
            headerShown: false
          }
        }/> 
        <Stack.Screen name = "signup" component={SignUp}
         options={
          {
            title:'SignUp',
          }
        }/> 
        </Stack.Navigator>
      </NavigationContainer>
  );
}  
const styles = StyleSheet.create({
  container: {
    flex:1    
  }
})  