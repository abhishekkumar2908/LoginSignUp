import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, {useState} from 'react'
import {useTranslation} from 'react-i18next';



const Homepage = ({ navigation }) => {
    const {t, i18n} = useTranslation();
  
    const [currentLanguage,setLanguage] =useState('en');
    
    const changeLanguage = value => {
      i18n
        .changeLanguage(value)
        .then(() => setLanguage(value))
        .catch(err => console.log(err));
    };
    return (
        <View style={styles.container}>
            <Text
                style={styles.head1}
            >this is Homepage</Text>
            <Text style={{fontWeight: 'bold', fontSize: 25, color: '#33A850'}}>
                {t('hello')}{' '}
             </Text>
            <Text style={{fontWeight: 'bold', fontSize: 25, color: '#33A850'}}>
                {t('this line is translated')}
            </Text>
            <Pressable
                onPress={() => changeLanguage('en')}
                style={{            backgroundColor:
              currentLanguage === 'en' ? '#33A850' : '#d3d3d3',
            padding: 20,
          }}>
          <Text>Select English</Text>
        </Pressable>
        <Pressable
          onPress={() => changeLanguage('hi')}
          style={{
            backgroundColor:
              currentLanguage === 'hi' ? '#33A850' : '#d3d3d3',
            padding: 20,
          }}>
          <Text>हिंदी का चयन करें</Text>
        </Pressable>
            <Text style= {styles.button1}
            
                onPress={
                    () => { navigation.navigate('login') }
                }
            >Get Started</Text>
        </View>
    )
}

export default Homepage

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button1: {
        backgroundColor: '#F50057',
        color: '#fff',
        padding: 10,
        borderRadius: 5,
        fontSize: 20,
        minWidth: 150,
        textAlign: 'center',
        margin: 10,
    },
    head1: {
        fontSize: 30,
        color: 'black',
        textAlign: 'center',
        fontWeight: '500',
    },
})