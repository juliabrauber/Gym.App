import React, { useState } from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { Button, Input, Text } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Ionicons } from '@expo/vector-icons';
import { useForm, Controller } from 'react-hook-form';

const Login = () => {

    const navigation = useNavigation();
    const handleNavRegister = () => {navigation.navigate("Register");};
    const handleNavRedPassword = () => {navigation.navigate("RedPassword");};
    const [passHide, setPassHide] = useState(true);

    const { control, handleSubmit, formState: { errors } } = useForm({
      defaultValues: {
        login: '',
        senha: '',
      },
    });

      const handleSignIn = (data) => {
        if (data.login === '' || data.senha === '') {
          return;
        }
        navigation.navigate("Home");
      };

  return (
    <KeyboardAwareScrollView >

    <View style={styles.container}>
        <Image style={styles.logo} source={require("../../../../assets/icon.png")}></Image>
        <Text style={styles.textEntrar}>Seja bem-vindo!</Text>

        <Controller
          control={control}
          rules={{required: true,}}
          render={({ field }) => (
        <Input containerStyle={{width:"85%", marginTop:75}}
        style={{color: "black"}} 
        placeholder='Login'
        onChangeText={(text) => field.onChange(text)}
        value={field.value}
        />
        )}
        name="login"
        />
        {errors.login && <Text style={{ color: 'red', marginTop: -15 }}>Login obrigatório!</Text>}

        <View style={{ flexDirection: 'row', width: '85%', alignItems: 'center' }}>
        <Controller
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
        <Input containerStyle={{flex: 1}}
        style={{color: "black"}}
        secureTextEntry={passHide}
        placeholder='Senha'
        onChangeText={(text) => field.onChange(text)}
        value={field.value}/>
        )}
        name="senha"
        />
        <TouchableOpacity onPress={() => setPassHide(!passHide)}>
            <Ionicons name={passHide ? "ios-eye" : "ios-eye-off"} style={{ color: "#000000", fontSize: 23 }} />
        </TouchableOpacity>
        </View>
        {errors.senha && <Text style={{ color: 'red', marginTop: -15 }}>Senha é obrigatório!</Text>}

      
       <Button onPress={() => {handleNavRedPassword();}}
        containerStyle={{width:"100%", marginTop:20,  borderWidth: 0}}
        titleStyle={{ color:"#808080", textAlign:"right", textDecorationLine:"underline", fontSize:14,}}
        title="Esqueceu sua senha?" 
        type="clear" />

        <Button onPress={() => handleSubmit(handleSignIn)()}
        containerStyle={{width:"100%", marginTop:30}}
        buttonStyle={{ borderColor:'transparent',  borderRadius: 30, backgroundColor:"#1CA69E"  }}
        titleStyle={{ color: "#ffffff" }}
        title="Fazer Login"
        type="outline" />

       <Button onPress={() => {handleNavRegister();}} 
        containerStyle={{width:"100%", marginTop:30}}
        buttonStyle={{ borderColor:'transparent',  borderRadius: 30, backgroundColor:"#1CA69E"  }}
        titleStyle={{ color: "#ffffff" }}
        title="Cadastre-se" 
        type="outline" />

      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#ffffff",
        paddingTop: 120,
        alignItems:"center"
    },
    logo:{
        width:150,
        height:150,
    },
    textEntrar:{
        fontSize:23,
        color:"#000000"
    },
    textForgot:{
        width:'90%',
        alignItems:'flex-end',
        fontSize:16,

    },
    textButton:{
        borderColor:"#000000",  
        borderRadius: 30, 
        backgroundColor:"#1CA69E",
        width:"100%", 
        marginTop:40,
        height:40,
        alignItems:"center",
    },
})

export default Login;