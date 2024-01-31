import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from '@rneui/themed';
import { Camera } from 'expo-camera';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { VStack, Heading, Stack, Center, NativeBaseProvider } from 'native-base';

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
    <NativeBaseProvider>
      <View style={{ flex: 1}}>
        {!cameraOpen ? (
          <VStack space={12}
          alignItems="center"
          marginTop={100} 
          px="8"
          flex={1}>
            <Heading size="md" >Name</Heading>
            <Stack direction="ce" mb="2.5" mt="1.5">
              <Center size="48" bg="#f0f0f0" rounded="sm" _text={{
                color: "black",
                fontWeight: "medium"
              }} shadow={"3"}>
                Foto Academia
              </Center>
            </Stack >

            <TouchableOpacity onPress={handleCheckInPress} style={styles.checkInButton}>
              <Text style={{ color: '#ffffff', alignItems:"center"  }}>Check In</Text>
            </TouchableOpacity>
          </VStack>
        ) : (
          <View style={{ flex: 1 }}>
            <Camera style={styles.camera} type={type}>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handleFlipPress}>
                  <MaterialIcons name="flip-camera-ios" size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleExitPress}>
                  <Feather name="x" size={24} color="white" />
                </TouchableOpacity>
              </View>
            </Camera>
          </View>
        )}

        {!cameraOpen && (

        <Center marginTop="20" marginBottom={48}>
          <Button
            onPress={() => {
              navigation.navigate('Home');
            }}
            containerStyle={{ width: '85%', marginTop:20 }}
            buttonStyle={{ borderColor: 'transparent', borderRadius: 30, backgroundColor: '#1CA69E',  }}
            titleStyle={{ color: '#ffffff' }}
            title="Voltar"
            type="outline"
          />
           </Center>
        )}
      </View>
    </NativeBaseProvider>
  );
}

export default CheckInAluno;

const styles = StyleSheet.create({
  checkInButton: {
    backgroundColor: '#1CA69E',
    padding: 12,
    borderRadius: 30,
    alignItems: 'center',
    width: '100%',
    borderColor: 'transparent',
    marginTop: 50,
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
    marginBottom:100,
  },
  camera:{
    width:"100%",
    height:"100%",
  },
});


