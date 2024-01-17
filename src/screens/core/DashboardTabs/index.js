import React from 'react';
 import { View } from 'react-native';
 import { NavigationContainer } from '@react-navigation/native';
 import DashboardTabs from '../DashboardTabs/routesTabs.js';


 const DetailsScreen = () => {  
 return (
     <NavigationContainer>
         <DashboardTabs/>

     </NavigationContainer>
 )
 }
 export default DetailsScreen ;