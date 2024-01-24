import React from 'react';
import { View, Text, } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';
import { Button } from '@rneui/themed'

const CheckInAluno = () => {
  const navigation = useNavigation();

  return (
    <KeyboardAwareScrollView>
      <View style={{ flex: 1, paddingTop: 120 }}>
        <Text>Olá,</Text>
        <Text>Olá,</Text>
        <Text>Olá,</Text>
        <Text>Olá,</Text>
        <Text>Olá,</Text>
        <Text>Olá,</Text>

        <Button
          onPress={() => {
            navigation.navigate('Home');
          }}
          containerStyle={{ width: '100%', marginTop: 30 }}
          buttonStyle={{ borderColor: 'transparent', borderRadius: 30, backgroundColor: '#1CA69E' }}
          titleStyle={{ color: '#ffffff' }}
          title="Voltar"
          type="outline"
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default CheckInAluno;
