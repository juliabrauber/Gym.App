import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, Input, Text } from '@rneui/themed';
import { useForm, Controller } from 'react-hook-form';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


import styles from './style';

const ConfigAluno = ({ navigation }) => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      nascimento: '',
      cpf:'',
      cep:'',
      rua:'',
      cidade:'',
      numero:'',
      uf:'',
    },
  });

  const [dadosSalvos, setDadosSalvos] = useState(false);
  

  const handleConcluir = (data) => {
    if (data.nascimento === '' || data.cpf ==='' || data.cep ==='' || data.rua === ''|| data.cidade ==='' || data.numero ==='' || data.uf === '') { 
      return;
    }
    setTimeout(() => {
      setDadosSalvos(true);
    }, 500);
  };

  return (

    <KeyboardAwareScrollView>
    <View style={{ flex: 1, marginLeft: 15, }}>
    
      <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold', marginTop: 120, marginBottom: 15 }}> Aluno </Text>
      <Text style={{ color: 'black', fontSize: 15, fontWeight: 'bold', marginTop: 40, marginBottom:20}}> Preencha os campos abaixo: </Text>

      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <Input
            containerStyle={{ width: "85%" }}
            style={{ color: "black", fontSize: 15}}
            placeholder='CPF'
            onChangeText={field.onChange}
            value={field.value}
          />
        )}
        name="cpf"
      />
      {errors.cpf && <Text style={{ color: 'red', marginTop: -15, marginLeft: 12, }}>CPF obrigatório!</Text>}

      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <Input
            containerStyle={{ width: "85%" }}
            style={{ color: "black", fontSize: 15}}
            placeholder='Data de nascimento'
            onChangeText={field.onChange}
            value={field.value}
          />
        )}
        name="nascimento"
      />
      {errors.nascimento && <Text style={{ color: 'red', marginTop: -15, marginLeft: 12, }}>Data de nascimento obrigatório!</Text>}

      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <Input
            containerStyle={{ width: "85%" }}
            style={{ color: "black", fontSize: 15}}
            placeholder='CEP'
            onChangeText={field.onChange}
            value={field.value}/>)}
        name="cep"/>
      {errors.cep && <Text style={{ color: 'red', marginTop: -15,marginLeft: 12, }}>CEP obrigatório!</Text>}

      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <Input
            containerStyle={{ width: "15%" }}
            style={{ color: "black", fontSize: 15}}
            placeholder='UF'
            onChangeText={field.onChange}
            value={field.value}
          />)}
        name="uf"/>
      {errors.uf && <Text style={{ color: 'red', marginTop: -15,marginLeft: 12, }}>UF obrigatório!</Text>}


      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <Input
            containerStyle={{ width: "85%" }}
            style={{ color: "black", fontSize: 15}}
            placeholder='Cidade'
            onChangeText={field.onChange}
            value={field.value}
          />)}
        name="cidade"/>
      {errors.cidade && <Text style={{ color: 'red', marginTop: -15,marginLeft: 12, }}>Cidade obrigatório!</Text>}

      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <Input
            containerStyle={{ width: "85%" }}
            style={{ color: "black", fontSize: 15}}
            placeholder='Endereço'
            onChangeText={field.onChange}
            value={field.value}
          />)}
        name="rua"/>
      {errors.rua && <Text style={{ color: 'red', marginTop: -15,marginLeft: 12, }}>Endereço obrigatório!</Text>}

      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <Input
            containerStyle={{ width: "20%" }}
            style={{ color: "black", fontSize: 15}}
            placeholder='N°'
            onChangeText={field.onChange}
            value={field.value}
          />)}
        name="numero"/>
      {errors.numero && <Text style={{ color: 'red', marginTop: -15,marginLeft: 12, }}>Número residencial obrigatório!</Text>}

     


      {dadosSalvos && <Text style={{ color: 'green', marginTop: 10, textAlign:'center', fontSize: 18 }}>Dados salvos com sucesso!</Text>}

      <Button
        onPress={handleSubmit(handleConcluir)}
        containerStyle={{ width: "100%", marginTop: 30 }}
        buttonStyle={{ borderColor: 'transparent', borderRadius: 30, backgroundColor: "#1CA69E" }}
        titleStyle={{ color: '#ffffff' }}
        title="Concluir"
        type="outline"/>

      <Button
        onPress={() => { navigation.navigate("Home"); }}
        containerStyle={{ width: "100%", marginTop: 30 }}
        buttonStyle={{ borderColor: 'transparent', borderRadius: 30, backgroundColor: "#1CA69E" }}
        titleStyle={{ color: '#ffffff' }}
        title="Voltar"
        type="outline"/>

    </View>
    </KeyboardAwareScrollView>
  );
};

export default ConfigAluno;
