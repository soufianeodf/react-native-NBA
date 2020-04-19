import React from 'react';
import {Platform} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//SCREENS
import SignIn from './Components/auth';
import News from './Components/news';
import Games from './Components/games';

const AppTabs = createBottomTabNavigator();
const AppStack = () => (
  <AppTabs.Navigator>
    <AppTabs.Screen name="News" component={News} />
    <AppTabs.Screen name="Games" component={Games} />
  </AppTabs.Navigator>
);

const Stack = createStackNavigator();
const AuthStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      options={{headerShown: false}}
      name="SignIn"
      component={SignIn}
    />
    <Stack.Screen
      options={{headerShown: false}}
      name="App"
      component={AppStack}
    />
  </Stack.Navigator>
);

export default () => (
  <NavigationContainer>
    <AuthStack />
  </NavigationContainer>
);
