import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';

const SettingsProfile = () => {
  const navigation = useNavigation();

  const handleNavLogin = () => {
    navigation.navigate("Login");
  };

  const handleNavConfigAcademia = () => {
    navigation.navigate("ConfigAcademia");
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.olaTexto}>
        </View>
      <Button
        onPress={handleNavConfigAcademia}
        containerStyle={{ width: "100%", marginTop: 40 }}
        buttonStyle={{ borderColor: 'transparent', borderRadius: 30 }}
        titleStyle={{ color: "#1CA69E" }}
        title="Configurar perfil"
        type="outline"
      />

      <Button
        onPress={handleNavLogin}
        containerStyle={{ width: "100%", marginTop: 40 }}
        buttonStyle={{ borderColor: 'transparent', borderRadius: 30 }}
        titleStyle={{ color: "#1CA69E" }}
        title="Sair"
        type="outline"
      />
    </View>

    
  );
};
const styles = StyleSheet.create({
  containerInicial: {
  flex: 1,
},
olaTexto: {
  borderWidth: 2,
  borderColor: 'transparent',
  backgroundColor:"#1CA69E",
  height:"15%",
},
textOla:{
  marginLeft: 20,
  marginTop: 60,
  fontSize: 24,
  fontWeight: 'bold',
  color: 'white',
},
});
export default SettingsProfile;
