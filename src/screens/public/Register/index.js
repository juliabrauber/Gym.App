import React, { useState } from 'react';
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native'
import { Button, Input, Text } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Ionicons } from '@expo/vector-icons';

const Register = () => {

    const navigation = useNavigation()

    const handleNavLogin = () => {
        navigation.navigate("Login");
    };

    const [escolhaSenha, setEscolhaSenha] = useState('');
    const [confirmeSenha, setConfirmeSenha] = useState('');
    const [hideSenha, setHideSenha] = useState(true);
    const [hideConfirmeSenha, setHideConfirmeSenha] = useState(true);

  return (
    <KeyboardAwareScrollView> 

      <View style={styles.container}>
        <Image style={styles.logo} source={require("../../../../assets/icon.png")}></Image>
        <View style={{ marginBottom: 20 }}>
        <Text style={{fontSize:23}} >Cadastro:</Text>
        </View>

        <Input containerStyle={{width:"85%"}}
        style={{color: "black"}} 
        placeholder='Nome'/>

        <Input containerStyle={{width:"85%"}}
        style={{color: "black"}} 
        placeholder='Sobrenome'/>

        <Input containerStyle={{width:"85%"}}
        style={{color: "black"}} 
        placeholder='Telefone'/>

        <Input containerStyle={{width:"85%"}}
        style={{color: "black"}} 
        placeholder='E-mail'/>

        <View style={{ flexDirection: 'row', width: '85%', alignItems: 'center',justifyContent: 'flex-end' }}>
        <Input containerStyle={{flex: 1}}
        style={{color: "black"}}
        secureTextEntry={hideSenha}
        placeholder='Escolha uma senha'
        value={escolhaSenha}
        onChangeText={(text) => setEscolhaSenha(text)}/>

        <TouchableOpacity onPress={() => setHideSenha(!hideSenha)}>
            <Ionicons name={hideSenha ? "ios-eye" : "ios-eye-off"} style={{ color: "#000000", fontSize: 23 }} />
        </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', width: '85%', alignItems: 'center',justifyContent: 'flex-end' }}>
        <Input containerStyle={{flex: 1}}
        style={{color: "black"}}
        secureTextEntry={hideConfirmeSenha}
        placeholder='Confirmar senha senha'
        value={confirmeSenha}
        onChangeText={(text) => setConfirmeSenha(text)}/>

        <TouchableOpacity onPress={() => setHideConfirmeSenha(!hideConfirmeSenha)}>
            <Ionicons name={hideConfirmeSenha ? "ios-eye" : "ios-eye-off"} style={{ color: "#000000", fontSize: 23 }} />
        </TouchableOpacity>
        </View>

        <Button onPress={() => {handleNavLogin();}}
         containerStyle={{width:"100%", marginTop:40}}
        buttonStyle={{ borderColor:'transparent',  borderRadius: 30, backgroundColor:"#1CA69E"  }}
        titleStyle={{ color: '#ffffff' }}
        title="Concluir" 
        type="outline" 
        />
      </View>
      </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
    scrollView:{
        flex:1,
    },
    container:{
        flex:1,
        backgroundColor:"#ffffff",
        paddingTop: 120,
        paddingBottom:60,
        alignItems:"center"
    },
    logo:{
        width:120,
        height:120,
    },
})

export default Register;