import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useMMKVString } from 'react-native-mmkv';

import { getWallet } from './core/wallet/getWallet';

import { Onboarding } from './components/onboarding/Onboarding';
import { Home } from './components/home/Home';
import { Wallet } from './components/wallet/Wallet';
import { Asset } from './components/asset/Asset';
import * as Icons from './components/ui/svg/icons/rn';

export type RootStackParamList = {
  readonly Onboarding: undefined;
  readonly Main: undefined;
  readonly Asset: { readonly assetName: string };
};

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#181a27',
        },
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerStyle: {
            backgroundColor: '#181a27',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          tabBarIcon: ({ color, size }) => (
            <Icons.Home name="account" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          headerStyle: {
            backgroundColor: '#181a27',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          tabBarIcon: ({ color, size }) => (
            <Icons.Frogchain name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Routes() {
  const [privateKey] = useMMKVString('wallet.private-key');
  const wallet = getWallet({ privateKey });

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={wallet ? 'Main' : 'Onboarding'}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Main" component={BottomTabs} />
        <Stack.Screen name="Asset" component={Asset} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
