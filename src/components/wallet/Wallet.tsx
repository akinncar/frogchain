import React, { useEffect } from 'react';
import { Button, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { useMMKVString } from 'react-native-mmkv';

import { tw } from '../ui/tailwind';

import { getWalletBalance } from '../../core/wallet/getWalletBalance';
import { sendTransaction } from '../../core/wallet/sendTransaction';
import { storage } from '../../core/storage/storage';
import { getWallet } from '../../core/wallet/getWallet';
import { formatToCryptoValue } from '../../core/numberUtils/formatToCryptoValue';

export function Wallet({ navigation }): JSX.Element {
  const [privateKey] = useMMKVString('wallet.private-key');
  const wallet = getWallet({ privateKey });

  const [balance, setBalance] = React.useState<string | undefined>(undefined);

  async function loadWalletBalance() {
    const walletBalance = await getWalletBalance({
      privateKey,
    });
    setBalance(walletBalance);
  }

  async function handleSendTransaction() {
    const transactionResult = await sendTransaction({
      privateKey,
    });
    console.log({ transactionResult });
  }

  async function handleDeleteAllWallets() {
    storage.clearAll();
    return navigation.navigate('Onboarding');
  }

  useEffect(() => {
    loadWalletBalance();
  }, []);

  return (
    <View
      style={[StyleSheet.absoluteFill, tw`flex-1 items-center justify-center`]}
    >
      <ImageBackground
        source={require('../ui/png/background.png')}
        resizeMode="cover"
        style={StyleSheet.absoluteFill}
      />
      <Text style={tw`text-white text-center pb-4`}>{wallet?.address}</Text>
      <Text style={tw`text-white text-center pb-4`}>
        Wallet Balance: {formatToCryptoValue(balance)}
      </Text>
      <Button title="Send Transaction" onPress={handleSendTransaction} />
      <Button title="Delete all wallets" onPress={handleDeleteAllWallets} />
    </View>
  );
}
