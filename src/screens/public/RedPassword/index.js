import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { Button, Input, Text } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';

    const RedPassword = () => {

    const navigation = useNavigation()

    const handleNavLogin = () => {
        navigation.navigate("Login");
    };


  return (
    <View style={styles.container}>
        <Image style={styles.logo} source={require("../../../../assets/icon.png")}></Image>
        <Text style={styles.textRedefinir}>Redefinição de senha</Text>

        <Input containerStyle={{width:"85%", marginTop:75}}
        style={{color: "black"}} 
        placeholder='Informe seu e-mail'
        autoCapitalize="none"
        autoComplete='email'/>


        <Button containerStyle={{width:"100%", marginTop:30}}
        buttonStyle={{ borderColor:'transparent',  borderRadius: 30, backgroundColor:"#1CA69E"  }}
        titleStyle={{ color: "#ffffff" }}
        title="Recuperar" 
        type="outline" />

       <Button onPress={() => {handleNavLogin();}}
       containerStyle={{width:"100%", marginTop:30}}
        buttonStyle={{ borderColor:'transparent',  borderRadius: 30, backgroundColor:"#1CA69E"  }}
        titleStyle={{ color: "#ffffff" }}
        title="Retornar a página inicial" 
        type="outline" />

    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#ffffff",
        paddingTop: 90,
        alignItems:"center"
    },
    logo:{
        width:175,
        height:175,
    },
    textRedefinir:{
        fontSize:23,
        color:"#000000"
    },
})

export default RedPassword;