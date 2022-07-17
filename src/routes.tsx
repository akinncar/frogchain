import React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useMMKVString } from 'react-native-mmkv';

import { getWallet } from './core/wallet/getWallet';

import { Onboarding } from './components/onboarding/Onboarding';
import { Home } from './components/home/Home';
import { Wallet } from './components/wallet/Wallet';
import { Asset } from './components/asset/Asset';
import { Receive } from './components/receive/Receive';

import * as Icons from './components/ui/svg/icons/rn';

export type RootStackParamList = {
  readonly Onboarding: undefined;
  readonly Main: undefined;
  readonly Asset: { readonly assetName: string };
  readonly Receive: { readonly assetName: string };
};

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: '#181a27',
          borderTopColor: '#181a27',
          // borderTopWidth: 0
          borderTopRightRadius: 16,
          borderTopLeftRadius: 16,
          marginHorizontal: 16,
        },

        tabBarShowLabel: false,
        tabBarInactiveTintColor: '#FFF',
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icons.Home name="account" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icons.Frogchain name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#181A27',
  },
};

export default function Routes() {
  const [privateKey] = useMMKVString('wallet.private-key');
  const wallet = getWallet({ privateKey });

  return (
    <NavigationContainer theme={Theme}>
      <Stack.Navigator
        initialRouteName={wallet ? 'Main' : 'Onboarding'}
        screenOptions={{ headerShown: false, detachPreviousScreen: false }}
        detachInactiveScreens={true}
      >
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Main" component={BottomTabs} />
        <Stack.Screen name="Asset" component={Asset} />
        <Stack.Screen name="Receive" component={Receive} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
