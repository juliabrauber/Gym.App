import React, { useState } from 'react';
import { Image, View, TouchableOpacity, Platform } from 'react-native';
import { Button, Input, Text } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Ionicons } from '@expo/vector-icons';
import { useForm, Controller } from 'react-hook-form';
import RNPickerSelect from 'react-native-picker-select';

import styles from "../Register/style";

const Register = () => {
  const navigation = useNavigation();
  const handleNavLogin = () => {
    navigation.navigate("Login");
  };
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
      pickerSelect: '',
    },
  });

  const handleSignIn = (data) => {
    if (data.nome === '' || data.sobrenome === '' || data.email === '' || data.pickerSelect === '' ||
      data.telefone === '' || data.escolhaSenha === '' || data.confirmeSenha === '') {
      return;
    }
    switch (data.pickerSelect) {
      case 'Aluno':
        navigation.navigate('HomeAluno');
        break;
      case 'Academia':
        navigation.navigate('HomeAcademia');
        break;
      case 'Personal':
        navigation.navigate('HomePersonal');
        break;
      case 'Nutricionista':
        navigation.navigate('HomeNutricionista');
        break;
    }
  };

  return (
    <KeyboardAwareScrollView>

      <View style={styles.container}>
        <Image style={styles.logo} source={require("../../../../assets/icon.png")}></Image>
        <View style={{ marginBottom: 20 }}>
          <Text style={{ fontSize: 23 }} >Cadastro:</Text>
        </View>

        <Controller
          control={control}
          rules={{ required: true, }}
          render={({ field }) => (
            <Input containerStyle={{ width: "85%" }}
              style={{ color: "black" }}
              placeholder='Nome'
              onChangeText={(text) => field.onChange(text)}
              value={field.value} />
          )}
          name="nome" />
        {errors.nome && <Text style={{ color: 'red', marginTop: -15 }}>Nome obrigatório!</Text>}

        <Controller
          control={control}
          rules={{ required: true, }}
          render={({ field }) => (
            <Input containerStyle={{ width: "85%" }}
              style={{ color: "black" }}
              placeholder='Sobrenome'
              onChangeText={(text) => field.onChange(text)}
              value={field.value} />
          )}
          name="sobrenome" />
        {errors.sobrenome && <Text style={{ color: 'red', marginTop: -15 }}>Sobrenome obrigatório!</Text>}

        <Controller
          control={control}
          rules={{ required: true, }}
          render={({ field }) => (
            <Input containerStyle={{ width: "85%" }}
              style={{ color: "black" }}
              placeholder='E-mail'
              onChangeText={(text) => field.onChange(text)}
              value={field.value} />
          )}
          name="email" />
        {errors.email && <Text style={{ color: 'red', marginTop: -15 }}>E-mail obrigatório!</Text>}

        <Controller
          control={control}
          rules={{ required: true, }}
          render={({ field }) => (
            <Input containerStyle={{ width: "85%" }}
              style={{ color: "black" }}
              placeholder='Telefone'
              onChangeText={(text) => field.onChange(text)}
              value={field.value} />
          )}
          name="telefone" />
        {errors.telefone && <Text style={{ color: 'red', marginTop: -15 }}>Telefone obrigatório!</Text>}

        <View style={{ flexDirection: 'row', width: '85%', alignItems: 'center', justifyContent: 'flex-end' }}>
          <Controller
            control={control}
            rules={{ required: true, }}
            render={({ field }) => (
              <Input containerStyle={{ flex: 1 }}
                style={{ color: "black" }}
                secureTextEntry={hideSenha}
                placeholder='Escolha uma senha'
                onChangeText={(text) => field.onChange(text)}
                value={field.value} />
            )}
            name="escolhaSenha" />

          <TouchableOpacity onPress={() => setHideSenha(!hideSenha)}>
            <Ionicons name={hideSenha ? "ios-eye" : "ios-eye-off"} style={{ color: "#000000", fontSize: 23 }} />
          </TouchableOpacity>
        </View>
        {errors.escolhaSenha && <Text style={{ color: 'red', marginTop: -15 }}>Senha obrigatório!</Text>}

        <View style={{ flexDirection: 'row', width: '85%', alignItems: 'center', justifyContent: 'flex-end' }}>
          <Controller
            control={control}
            rules={{ required: true, }}
            render={({ field }) => (
              <Input containerStyle={{ flex: 1 }}
                style={{ color: "black" }}
                secureTextEntry={hideConfirmeSenha}
                placeholder='Confirmar senha'
                onChangeText={(text) => field.onChange(text)}
                value={field.value} />
            )}
            name="confirmeSenha" />

          <TouchableOpacity onPress={() => setHideConfirmeSenha(!hideConfirmeSenha)}>
            <Ionicons name={hideConfirmeSenha ? "ios-eye" : "ios-eye-off"} style={{ color: "#000000", fontSize: 23 }} />
          </TouchableOpacity>
        </View>
        {errors.confirmeSenha && <Text style={{ color: 'red', marginTop: -15, marginBottom: 13 }}>Confirmar senha obrigatório!</Text>}

        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <View style={styles.selectStyles}>
              <RNPickerSelect
                placeholder={{ label: 'Selecione uma opção de perfil', value: null, textColor: "#86939e" }}
                useNativeAndroidPickerStyle ={ false }
                onValueChange={(value) => field.onChange(value)}
                items={[
                  { label: 'Academia', value: 'Academia' },
                  { label: 'Aluno', value: 'Aluno' },
                  { label: 'Nutricionista', value: 'Nutricionista' },
                  { label: 'Personal', value: 'Personal' },
                ]}
                style={{
                  inputIOS: {
                    padding: 7, flex: 1, color: 'black', borderBottomWidth: 1, borderColor: "#86939e", width: '100%',
                    textAlign: 'left', fontSize: 18,
                  },
                  inputAndroid: {
                    padding: 7, flex: 1, color: 'black', borderBottomWidth: 1, borderColor: "#86939e", width: '100%',
                    textAlign: 'left', fontSize: 18,
                  },
                }}
              />
            </View>
          )}
          name="pickerSelect"
        />
        {errors.pickerSelect && (
          <Text style={{ color: 'red', marginTop: -25 }}>Seleção obrigatória!</Text>
        )}


        <Button onPress={() => {handleNavLogin();}}
          containerStyle={{width:'85%', marginTop:40}}
          buttonStyle={{ borderColor:'transparent',  borderRadius: 30, backgroundColor:"#1CA69E"  }}
          titleStyle={{ color: "#ffffff" }}
          title="Retornar a página inicial" 
          type="outline" />

        <Button onPress={() => handleSubmit(handleSignIn)()}
          containerStyle={{ width: '85%', marginTop: 30 }}
          buttonStyle={{ borderColor: 'transparent', borderRadius: 30, backgroundColor: "#1CA69E" }}
          titleStyle={{ color: '#ffffff' }}
          title="Concluir"
          type="outline"
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Register;