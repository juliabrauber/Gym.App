import React, { useState } from 'react';
import { Image, View, TouchableOpacity } from 'react-native'
import { Button, Input, Text } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Ionicons } from '@expo/vector-icons';
import { useForm, Controller } from 'react-hook-form';

import styles from "../Register/style";

const Register = () => {

    const navigation = useNavigation()

    const [hideSenha, setHideSenha] = useState(true);
    const [hideConfirmeSenha, setHideConfirmeSenha] = useState(true);

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
          nome: '',
          sobrenome: '',
          email: '',
          telefone: '',
          escolhaSenha: '',
          confirmeSenha: '',
        },
      });
  
        const handleSignIn = (data) => {
          if (data.nome === '' || data.sobrenome === '' || data.email === '' || telefone === '' || escolhaSenha === '' || confirmeSenha === '') {
            return;
          }
          navigation.navigate("Home");
        };

  return (
    <KeyboardAwareScrollView> 

      <View style={styles.container}>
        <Image style={styles.logo} source={require("../../../../assets/icon.png")}></Image>
        <View style={{ marginBottom: 20 }}>
        <Text style={{fontSize:23}} >Cadastro:</Text>
        </View>

        <Controller
          control={control}
          rules={{required: true,}}
          render={({ field }) => (
        <Input containerStyle={{width:"85%"}}
        style={{color: "black"}} 
        placeholder='Nome'
        onChangeText={(text) => field.onChange(text)}
        value={field.value}/>
        )}
        name="nome"/>
        {errors.nome && <Text style={{ color: 'red', marginTop: -15 }}>Nome obrigatório!</Text>}

        <Controller
          control={control}
          rules={{required: true,}}
          render={({ field }) => (
        <Input containerStyle={{width:"85%"}}
        style={{color: "black"}} 
        placeholder='Sobrenome'
        onChangeText={(text) => field.onChange(text)}
        value={field.value}/>
        )}
        name="sobrenome" />
        {errors.sobrenome && <Text style={{ color: 'red', marginTop: -15 }}>Sobrenome obrigatório!</Text>}


        <Controller
          control={control}
          rules={{required: true,}}
          render={({ field }) => (
       <Input containerStyle={{width:"85%"}}
        style={{color: "black"}} 
        placeholder='E-mail'
        onChangeText={(text) => field.onChange(text)}
        value={field.value}/>
        )}
        name="email" />
        {errors.email && <Text style={{ color: 'red', marginTop: -15 }}>E-mail obrigatório!</Text>}


        <Controller
          control={control}
          rules={{required: true,}}
          render={({ field }) => (
        <Input containerStyle={{width:"85%"}}
        style={{color: "black"}} 
        placeholder='Telefone'
        onChangeText={(text) => field.onChange(text)}
        value={field.value}/>
        )}
        name="telefone" />
        {errors.telefone && <Text style={{ color: 'red', marginTop: -15 }}>Telefone obrigatório!</Text>}


        <View style={{ flexDirection: 'row', width: '85%', alignItems: 'center',justifyContent: 'flex-end' }}>
        <Controller
          control={control}
          rules={{required: true,}}
          render={({ field }) => (
        <Input containerStyle={{flex: 1}}
        style={{color: "black"}}
        secureTextEntry={hideSenha}
        placeholder='Escolha uma senha'
        onChangeText={(text) => field.onChange(text)}
        value={field.value}/>
        )}
        name="escolhaSenha"/>

        <TouchableOpacity onPress={() => setHideSenha(!hideSenha)}>
            <Ionicons name={hideSenha ? "ios-eye" : "ios-eye-off"} style={{ color: "#000000", fontSize: 23 }} />
        </TouchableOpacity>
        </View>
        {errors.escolhaSenha && <Text style={{ color: 'red', marginTop: -15 }}>Senha obrigatório!</Text>}

        <View style={{ flexDirection: 'row', width: '85%', alignItems: 'center',justifyContent: 'flex-end' }}>
        <Controller
          control={control}
          rules={{required: true,}}
          render={({ field }) => (  
        <Input containerStyle={{flex: 1}}
        style={{color: "black"}}
        secureTextEntry={hideConfirmeSenha}
        placeholder='Confirmar senha senha'
        onChangeText={(text) => field.onChange(text)}
        value={field.value}/>
        )}
        name="confirmeSenha"/>

        <TouchableOpacity onPress={() => setHideConfirmeSenha(!hideConfirmeSenha)}>
            <Ionicons name={hideConfirmeSenha ? "ios-eye" : "ios-eye-off"} style={{ color: "#000000", fontSize: 23 }} />
        </TouchableOpacity>
        </View>
        {errors.confirmeSenha && <Text style={{ color: 'red', marginTop: -15 }}>Confirmar senha obrigatório!</Text>}

        <Button onPress={() => handleSubmit(handleSignIn)()}
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

export default Register;