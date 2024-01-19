import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
// import { AuthProvider } from './AuthContext';
import Routes from '../Gym.App/src/routes';
import DashboardTabs from './src/screens/core/DashboardTabs/routesTabs';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="light" backgroundColor="#000000" />
           <Routes/>
      {/* <AuthProvider> */}
           {/* <DashboardTabs /> */}
    {/* </AuthProvider> */}
    </View>
  );
}