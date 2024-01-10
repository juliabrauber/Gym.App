import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Routes from '../Gym.App/src/routes';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="light" backgroundColor="#000000" />
      <Routes/>
    </View>
  );
}