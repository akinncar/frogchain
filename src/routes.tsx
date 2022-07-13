import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useMMKVString } from 'react-native-mmkv';

import { Onboarding } from './components/onboarding/Onboarding';
import { Home } from './components/home/Home';
import { Wallet } from './components/wallet/Wallet';
import { getWallet } from './core/wallet/getWallet';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#000000',
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerStyle: {
            backgroundColor: '#000000',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          headerStyle: {
            backgroundColor: '#000000',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default function Routes() {
  const [walletPrivateKey] = useMMKVString('wallet.private-key');
  const wallet = getWallet(walletPrivateKey);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={wallet ? 'Main' : 'Onboarding'}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Tab.Screen name="Main" component={BottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
