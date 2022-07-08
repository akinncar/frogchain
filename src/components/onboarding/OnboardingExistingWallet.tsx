import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { tw } from '../ui/tailwind';
import { Button } from '../ui/button/Button';
import { walletInit } from '../../core/wallet';

export function Onboarding({ navigation }): JSX.Element {
  const [isLoading, setIsLoading] = useState(false);

  async function handleCreateWallet() {
    setIsLoading(true);
    await walletInit();
    return navigation.navigate('Main');
  }

  return (
    <View
      style={[
        StyleSheet.absoluteFill,
        tw`items-center justify-center bg-black px-4`,
      ]}
    >
      <Button
        title="Create Wallet"
        onPress={handleCreateWallet}
        loading={isLoading}
      />
    </View>
  );
}
