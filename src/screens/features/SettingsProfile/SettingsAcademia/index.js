import React, { useState } from 'react';
import { Image, View } from 'react-native';
import { Button, Input, Text } from '@rneui/themed';
import { useForm, Controller } from 'react-hook-form';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import * as ImagePicker from 'expo-image-picker';

const ConfigAcademia = ({ navigation }) => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      cpf:'',
      cep:'',
      rua:'',
      cidade:'',
      numero:'',
      uf:'',
      funcionamento:'',
      valor:'',
    },
  });

  const [dadosSalvos, setDadosSalvos] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  
  const handleConcluir = (data) => {
    if (data.cpf ==='' || data.cep ==='' || data.rua === ''|| data.cidade ==='' || data.numero ==='' || 
    data.uf === ''|| data.funcionamento ==='' || data.valor ==='') { 
      return;
    }
    setTimeout(() => {
      setDadosSalvos(true);
    }, 500);
  };
  const handleImagePick = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permissão para acessar a galeria é necessária!');
      return;
    }
    const pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (!pickerResult.canceled) {
      setProfileImage(pickerResult.assets[0].uri);
    }
  };
   const handleTrocarFoto = () => {
    setProfileImage(null);
  };

  return (
    <KeyboardAwareScrollView>
      <View style={{ flex: 1, alignItems: 'center' }}>
        <View style={{ alignItems: 'center', marginTop: 60 }}>
        <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold', marginBottom:10}}>
            Aluno
          </Text>
          {profileImage && (
            <Image source={{ uri: profileImage }} style={{ width: 100, height: 100, borderRadius: 75 }} />
          )}
          {profileImage && (
            <Button
              onPress={handleTrocarFoto}
              buttonStyle={{ borderColor: 'transparent', width: 90, height: 30, marginTop: 5 }}
              titleStyle={{ color: '#000000', fontSize:13, textDecorationLine:'underline' }}
              title="Trocar Foto"
              type="outline"
            />
          )}
          {!profileImage && (
            <Button
              onPress={handleImagePick}
              buttonStyle={{ borderColor: 'transparent', borderRadius: 45, backgroundColor: '#1CA69E', width: 90, height: 90 }}
              titleStyle={{ color: '#ffffff', fontSize:15 }}
              title="Escolher Foto"
              type="outline"
            />
          )}
        </View>

        <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold', marginTop: 20, marginBottom:20}}> Preencha os campos abaixo: </Text>

        <Controller
        control={control}
        render={({ field }) => (
          <Input
            containerStyle={{ width: "85%" }}
            style={{ color: "black", fontSize: 15}}
            placeholder='Digite uma bio para o perfil. Ex: tipos de serviços ofercidos'
            onChangeText={field.onChange}
            value={field.value}
            maxLength={500}
            multiline
            numberOfLines={4}
          />
        )}
        name="bio"
      />

        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Input
              containerStyle={{ width: "85%" }}
              style={{ color: "black", fontSize: 15}}
              placeholder='CPF ou CPNJ'
              onChangeText={field.onChange}
              value={field.value}
            />
          )}
          name="cpf"
        />
        {errors.cpf && <Text style={{ color: 'red', marginTop: -15, marginLeft: 12 }}>Preenchimento obrigatório!</Text>}

        <Controller
          control={control}
          render={({ field }) => (
            <Input
              containerStyle={{ width: "85%" }}
              style={{ color: "black", fontSize: 15}}
              placeholder='Número CREF (opcional)'
              onChangeText={field.onChange}
              value={field.value}
            />
          )}
          name="numeroCref"
        />

        <Controller
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <Input
            containerStyle={{ width: "85%" }}
            style={{ color: "black", fontSize: 15}}
            placeholder='Dias e horários de funcionamento'
            onChangeText={field.onChange}
            value={field.value}/>)}
        name="funcionamento"/>
      {errors.funcionamento && <Text style={{ color: 'red', marginTop: -15,marginLeft: 12, }}>Preenchimento obrigatório!</Text>}

      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <Input
            containerStyle={{ width: "85%" }}
            style={{ color: "black", fontSize: 15}}
            placeholder='Valor mensal'
            onChangeText={field.onChange}
            value={field.value}/>)}
        name="valor"/>
      {errors.valor && <Text style={{ color: 'red', marginTop: -15,marginLeft: 12, }}>Preenchimento obrigatório!</Text>}

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
            containerStyle={{ width: "85%" }}
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
            containerStyle={{ width: "85%" }}
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
        containerStyle={{ width: "85%", marginTop: 30 }}
        buttonStyle={{ borderColor: 'transparent', borderRadius: 30, backgroundColor: "#1CA69E" }}
        titleStyle={{ color: '#ffffff' }}
        title="Concluir"
        type="outline"/>

      <Button
        onPress={() => { navigation.navigate("Home"); }}
        containerStyle={{ width: "85%", marginTop: 30 }}
        buttonStyle={{ borderColor: 'transparent', borderRadius: 30, backgroundColor: "#1CA69E" }}
        titleStyle={{ color: '#ffffff' }}
        title="Voltar"
        type="outline"/>

    </View>
    </KeyboardAwareScrollView>
  );
};

export default ConfigAcademia;
