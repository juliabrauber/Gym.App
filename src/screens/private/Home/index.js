import React, { useState } from 'react'
import { Alert, Image, StyleSheet, TouchableOpacity, Vibration, View } from 'react-native'
import { Button, Input, Text } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { color } from '@rneui/base';


const Home = () => {

    const navigation = useNavigation();


    const handleNavHome = () => {navigation.navigate("Home");};


  return (
    <KeyboardAwareScrollView >

    <View >
       <Text style={{ color: 'red' }}>Hello Word!!</Text>

      </View>
    </KeyboardAwareScrollView>
  );
};


export default Home;