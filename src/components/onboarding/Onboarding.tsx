import React, { useState } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';

import { tw } from '../ui/tailwind';
import { Button } from '../ui/button/Button';
import { walletInit } from '../../core/wallet';
import Logo from '../ui/svg/Logo';
import { SafeAreaView } from 'react-native-safe-area-context';

export function Onboarding({ navigation }): JSX.Element {
  const [isLoading, setIsLoading] = useState(false);

  async function handleCreateWallet() {
    setIsLoading(true);
    await walletInit();
    return navigation.navigate('Main');
  }

  return (
    <View style={[StyleSheet.absoluteFill, tw`bg-black`]}>
      <ImageBackground
        source={require('../ui/png/background.png')}
        resizeMode="cover"
        style={StyleSheet.absoluteFill}
      />

      <SafeAreaView
        style={[
          StyleSheet.absoluteFill,
          tw`items-center justify-between px-4 py-16`,
        ]}
      >
        <Logo />
        <View style={tw`w-full`}>
          <Button
            title="Create Wallet"
            onPress={handleCreateWallet}
            loading={isLoading}
            style={tw`mb-4`}
          />
          <Button
            title="I Already Have a Wallet"
            onPress={handleCreateWallet}
            loading={isLoading}
            variant="secondary"
          />
        </View>
      </SafeAreaView>
    </View>
  );
}
