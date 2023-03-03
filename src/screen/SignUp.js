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
 
const SignUp=()=> {
  const [email, setEmail] = useState("");
  const [dob, setdob] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  return (
    <View style={styles.container}>
      <Image style={styles.bgImage} resizeMode='cover' source={require("../../assets/bg.png")} /> 

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
          placeholder="DOB"
          placeholderTextColor="#003f5c"
          onChangeText={(dob) => setdob(dob)}
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
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Confirm Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(confirmPassword) => setconfirmPassword(confirmPassword)}
        /> 
      </View> 
      
      <TouchableOpacity>
        <Text style={styles.create_button}>Create Account</Text> 
      </TouchableOpacity>  
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>SignUp</Text> 
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

export default SignUp