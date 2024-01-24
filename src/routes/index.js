import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screens/public/Login';
import Home from '../screens/private/Home';
import Register from '../screens/public/Register';
import RedPassword from '../screens/public/RedPassword';
import HomeAcademia from '../screens/private/Home/HomeAcademia';
import HomeAluno from '../screens/private/Home/HomeAluno';
import HomeNutricionista from '../screens/private/Home/HomeNutricionista';
import HomePersonal from '../screens/private/Home/HomePersonal';
import ConfigAluno from '../screens/features/SettingsProfile/SettingsAluno';
import SettingsProfile from '../screens/features/SettingsProfile';
import CheckInAluno from '../screens/core/Components/checkinAluno';


const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="RedPassword" component={RedPassword} />
        <Stack.Screen name="HomeAcademia" component={HomeAcademia} />
        <Stack.Screen name="HomeAluno" component={HomeAluno} />
        <Stack.Screen name="HomeNutricionista" component={HomeNutricionista} />
        <Stack.Screen name="HomePersonal" component={HomePersonal} />
        <Stack.Screen name="ConfigAluno" component={ConfigAluno} />
        <Stack.Screen name="SettingsProfile" component={SettingsProfile} />
        <Stack.Screen name="CheckInAluno" component={CheckInAluno} />

      </Stack.Navigator> 
    </NavigationContainer>
  );
}
export default Routes;