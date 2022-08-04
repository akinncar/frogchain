import React, { useState } from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, View } from 'react-native';
import type { StackNavigationProp } from '@react-navigation/stack';

import { tw } from '../ui/tailwind';
import { Button } from '../ui/button/Button';
import { walletInit } from '../../core/wallet/walletInit';
import Logo from '../ui/svg/Logo';
import type { RootStackParamList } from '../../routes';
import { useNavigation } from '@react-navigation/native';

export function Onboarding(): JSX.Element {
  const navigation =
    useNavigation<StackNavigationProp<RootStackParamList, 'Onboarding'>>();

  const [isLoading, setIsLoading] = useState(false);

  async function handleCreateWallet() {
    setIsLoading(true);
    const newWallet = await walletInit({
      seedPhrase: null,
      network: null,
    });
    setIsLoading(false);
    console.log({ newWallet });
    return navigation.navigate('Home');
  }

  return (
    <View style={[StyleSheet.absoluteFill, tw`bg-black`]}>
      <ImageBackground
        source={require('../ui/png/background.png')}
        resizeMode="cover"
        style={[StyleSheet.absoluteFill, tw`opacity-50`]}
      />

      <SafeAreaView
        style={[
          StyleSheet.absoluteFill,
          tw`items-center justify-between  my-16`,
        ]}
      >
        <Logo />
        <View style={tw`w-full px-4`}>
          <Button
            title="Create Wallet"
            onPress={handleCreateWallet}
            loading={isLoading}
            style={tw`mb-4`}
          />
          <Button
            title="I Already Have a Wallet"
            onPress={() => navigation.navigate('OnboardingExistingWallet')}
            loading={isLoading}
            variant="secondary"
          />
        </View>
      </SafeAreaView>
    </View>
  );
}
