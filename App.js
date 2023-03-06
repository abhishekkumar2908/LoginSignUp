import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {  StyleSheet,  Text,  View, } from "react-native";
import Login from './src/screen/Login';
import SignUp from "./src/screen/SignUp";
import HomePage from './src/screen/HomePage';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './assets/i18n/en.json';
import hiTranslations from './assets/i18n/hi.json';



import {NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


i18next.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslations },
    hi: { translation: hiTranslations },
  },
  lng: 'en',
});

const Stack = createNativeStackNavigator();
export default function App() {
 
  return (
      // <View style={styles.container}>
      //   <Login />
      // </View>
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="homePage" component={HomePage}/>
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