import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Entypo, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import HomeAcademia from '../../private/Home/HomeAcademia';
import Messages from '../../features/Messages';
import Notifications from '../../features/Notifications';
import SettingsProfile from '../../features/SettingsProfile';

const Tab = createBottomTabNavigator();

function RoutesTabs() {
  return (
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: "#1CA69E",
            borderTopColor: 'transparent',
            paddingBottom: 5,
            paddingTop: 5,
          },
          tabBarActiveTintColor: '#ffffff',
        }}
      >
        <Tab.Screen
          name="Início"
          component={HomeAcademia}
          options={{
            tabBarLabel:'',
            tabBarIcon: ({ size, color }) => (
              <Entypo name="home" size={28} color={color} />
            ),headerShown: false,
          }}
        />
        <Tab.Screen
          name="Mensagens"
          component={Messages}
          options={{
            tabBarLabel:'',
            tabBarIcon: ({ size, color }) => (
              <MaterialCommunityIcons name="message-processing-outline" size={28} color={color} />
            ),headerShown: false,
          }}
        />

        <Tab.Screen
          name="Notificações"
          component={Notifications}
          options={{
            tabBarLabel:'',
            tabBarIcon: ({ size, color }) => (
              <Ionicons name="notifications" size={28} color={color} />
            ),headerShown: false,
          }}
        />

        <Tab.Screen
          name="Configurações"
          component={SettingsProfile}
          options={{
            tabBarLabel:'',
            tabBarIcon: ({ size, color }) => (
              <AntDesign name="setting" size={28} color={color} />
            ),headerShown: false,
          }}
        />
      </Tab.Navigator>
  );
}

export default RoutesTabs;
