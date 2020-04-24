import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//SCREENS
import SignIn from './Components/auth';
import News from './Components/news';
import Games from './Components/games';
import NewsArticle from './Components/news/article';
import GamesArticle from './Components/news/article';

import Logo from './Components/auth/authLogo';

const headerConf = {
  headerTitle: () => <Logo style={{width: 70, height: 35}} />,
  headerTitleAlign: 'center',
  headerStyle: {
    backgroundColor: '#001338',
  },
  headerLeft: null,
};

const Stack = createStackNavigator();
const NewsStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="News" component={News} />
    <Stack.Screen name="NewsArticle" component={NewsArticle} />
  </Stack.Navigator>
);

const GamesStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Games" component={Games} />
    <Stack.Screen name="GamesArticle" component={GamesArticle} />
  </Stack.Navigator>
);

const AppTabs = createBottomTabNavigator();
const AppStack = () => (
  <AppTabs.Navigator
    tabBarOptions={{
      showLabel: false,
      activeTintColor: '#fff',
      activeBackgroundColor: '#00194b',
      inactiveBackgroundColor: '#001338',
      style: {
        backgroundColor: '#001338',
      },
    }}>
    <AppTabs.Screen
      name="News"
      component={NewsStack}
      options={{
        tabBarIcon: ({tintColor}) => (
          <Ionicons name="ios-basketball" size={25} color={'#fff'} />
        ),
      }}
    />
    <AppTabs.Screen
      name="Games"
      component={GamesStack}
      options={{
        tabBarIcon: ({tintColor}) => (
          <Ionicons name="md-tv" size={25} color={'#fff'} />
        ),
      }}
    />
  </AppTabs.Navigator>
);

const AuthStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      options={{headerShown: false}}
      name="SignIn"
      component={SignIn}
    />
    <Stack.Screen options={headerConf} name="App" component={AppStack} />
  </Stack.Navigator>
);

export default () => (
  <NavigationContainer>
    <AuthStack />
  </NavigationContainer>
);
