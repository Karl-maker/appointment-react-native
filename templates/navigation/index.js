import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import pages/screens

import Home from "../../Home";

const NavigationWrapper = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Appointments" />
        <Tab.Screen name="Create" />
        <Tab.Screen name="Settings" />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default NavigationWrapper;
