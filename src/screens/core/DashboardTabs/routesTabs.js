import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import Messages from '../../features/Messages';
import Notifications from '../../features/Notifications';
import SettingsProfile from '../../features/SettingsProfile';

const Tab = createBottomTabNavigator();

function DashboardTabs() {
  return (
    <NavigationContainer>
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
          name="Mensagens"
          component={Messages}
          options={{
            tabBarLabel:'',
            tabBarIcon: ({ size, color }) => (
              <MaterialCommunityIcons name="message-processing-outline" size={28} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="Notificações"
          component={Notifications}
          options={{
            tabBarLabel:'',
            tabBarIcon: ({ size, color }) => (
              <Ionicons name="notifications" size={28} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="Configurações"
          component={SettingsProfile}
          options={{
            tabBarLabel:'',
            tabBarIcon: ({ size, color }) => (
              <AntDesign name="setting" size={28} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default DashboardTabs;
