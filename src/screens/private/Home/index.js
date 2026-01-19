import React from 'react';
import { NativeBaseProvider } from 'native-base';
import RoutesTabs from '../../core/DashboardTabs/routesTabs';



function Home() {
  return (
    <NativeBaseProvider >
      <RoutesTabs />
    </NativeBaseProvider>
  );
}

export default Home;
