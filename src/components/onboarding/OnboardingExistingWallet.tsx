import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { isValidMnemonic } from '../../core/wallet/isValidMnemonic';

import { tw } from '../ui/tailwind';
import { Button } from '../ui/button/Button';
import { walletInit } from '../../core/wallet/walletInit';
import { TextInput } from '../ui/textInput/TextInput';

export function OnboardingExistingWallet({ navigation }): JSX.Element {
  const [isLoading, setIsLoading] = useState(false);
  const [seedPhrase, setSeedPhrase] = React.useState('');

  async function handleCreateWallet() {
    setIsLoading(true);
    await walletInit({ seedPhrase, network: null });
    return navigation.navigate('Main');
  }

  return (
    <View
      style={[
        StyleSheet.absoluteFill,
        tw`items-center justify-center bg-black px-4`,
      ]}
    >
      <TextInput
        value={seedPhrase}
        onChangeText={text => setSeedPhrase(text)}
        style={tw`mb-4`}
        placeholder="Enter your 12 words seed phrase..."
        autoCapitalize="none"
        multiline
      />
      <Button
        title="Restore Wallet"
        onPress={handleCreateWallet}
        loading={isLoading}
        disabled={!isValidMnemonic(seedPhrase)}
      />
    </View>
  );
}
