import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';
import { Button } from '@rneui/themed';
import { Camera } from 'expo-camera';

const CheckInAluno = () => {
  const navigation = useNavigation();
  const [cameraOpen, setCameraOpen] = useState(false);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [permission, setPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setPermission(status);
    })();
  }, []);

  const handleCheckInPress = () => {
    setCameraOpen(true);
  };

  const handleFlipPress = () => {
    setType(
      type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };

  const handleExitPress = () => {
    setCameraOpen(false);
  };

  if (permission !== 'granted') {
    return (
      <View>
        <Text>{permission === 'denied' ? 'Sem acesso à câmera!' : 'Solicitando permissão...'}</Text>
      </View>
    );
  }

  return (
    <KeyboardAwareScrollView>
      <View style={{ flex: 1, paddingTop: 120 }}>
        {!cameraOpen ? (
          <TouchableOpacity onPress={handleCheckInPress} style={styles.checkInButton}>
            <Text style={{ color: '#ffffff' }}>Check In</Text>
          </TouchableOpacity>
        ) : (
          <Camera type={type} style={{ flex: 1 }}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={handleFlipPress}>
                <Text style={{ color: '#ffffff' }}>Virar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={handleExitPress}>
                <Text style={{ color: '#ffffff' }}>Sair</Text>
              </TouchableOpacity>
            </View>
          </Camera>
        )}

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

const styles = StyleSheet.create({
  checkInButton: {
    backgroundColor: '#1CA69E',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    margin: 20,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  button: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
});

export default CheckInAluno;
