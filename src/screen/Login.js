import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
 
const Login=({navigation})=> {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <Image style={styles.bgImage} resizeMode='cover' source={require("../../assets/bg2.png")} /> 

      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        /> 
      </View> 
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text> 
      </TouchableOpacity>
      
        <Text style={styles.create_button} 
          onPress={()=>{navigation.navigate('signup')}}>Create Account</Text> 
        
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text> 
      </TouchableOpacity> 
    </View> 
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
   marginBottom: 40
  },
  bgImage: {
    position: 'absolute',
    height :'100%',
    top:23,
    
  },
  
  inputView: {
    backgroundColor: "lightpink",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    textAlign:'center'
  },
  forgot_button: {
    height: 30,
    color:'skyblue'
    
  },
  create_button: {
   
    color:'lightblue',
    marginRight: 10,
    fontStyle:'italic',
    fontWeight: 500

  },
  loginBtn: {
    width: "40%",
    borderRadius: 30,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "skyblue",
    
  },
  loginText:{
    color:'black',
    fontSize:22,
    fontWeight:500,
  },
 
});

export default Login