import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, Input, Text } from '@rneui/themed';
import { useForm, Controller } from 'react-hook-form';


import styles from './style';

const ConfigAluno = ({ navigation }) => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      nascimento: '',
    },
  });

  const [dadosSalvos, setDadosSalvos] = useState(false);
  

  const handleConcluir = (data) => {
    if (data.nascimento === '') { 
      return;
    }
    setTimeout(() => {
      setDadosSalvos(true);
    }, 1000);
  };

  return (
    <View style={{ flex: 1, marginLeft: 15, }}>
    
      <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold', marginTop: 120, marginBottom: 15 }}> Aluno </Text>
      <Text style={{ color: 'black', fontSize: 15, fontWeight: 'bold', marginTop: 40, }}> Preencha os campos abaixo: </Text>

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
      {errors.nascimento && <Text style={{ color: 'red', marginTop: -15 }}>Data de nascimento obrigatória!</Text>}

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
      {errors.nascimento && <Text style={{ color: 'red', marginTop: -15 }}>Data de nascimento obrigatória!</Text>}






      {dadosSalvos && <Text style={{ color: 'green', marginTop: 10 }}>Dados salvos com sucesso!</Text>}

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
  );
};

export default ConfigAluno;
