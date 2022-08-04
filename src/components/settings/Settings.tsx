import React from 'react';
import { Button, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { useMMKVString } from 'react-native-mmkv';

import { tw } from '../ui/tailwind';

import { storage } from '../../core/storage/storage';
import { getWallet } from '../../core/wallet/getWallet';

export function Settings({ navigation }): JSX.Element {
  const [privateKey] = useMMKVString('wallet.private-key');
  const wallet = getWallet({ privateKey });

  async function handleDeleteAllWallets() {
    storage.clearAll();
    return navigation.navigate('Onboarding');
  }

  return (
    <View
      style={[StyleSheet.absoluteFill, tw`flex-1 items-center justify-center`]}
    >
      <ImageBackground
        source={require('../ui/png/background.png')}
        resizeMode="cover"
        style={StyleSheet.absoluteFill}
      />
      <Text style={tw`text-gray-200 text-center pb-4`}>{wallet?.address}</Text>
      <Button title="Delete wallet" onPress={handleDeleteAllWallets} />
    </View>
  );
}
