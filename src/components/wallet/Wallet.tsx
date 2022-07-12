import React from 'react';
import { Alert, Button, StyleSheet, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { tw } from '../ui/tailwind';

import { walletInit } from '../../core/wallet/walletInit';
import { getDefaultWallet } from '../../core/wallet/getDefaultWallet';
import { getWalletBalance } from '../../core/wallet/getWalletBalance';
import { sendTransaction } from '../../core/wallet/sendTransaction';

export function Wallet(): JSX.Element {
  async function handleCreateWallet() {
    const newWallet = await walletInit({
      seedPhrase: null,
      network: null,
    });
    console.log({ newWallet });
  }

  async function handleShowBalance() {
    const wallet = await getDefaultWallet();
    const walletBalance = await getWalletBalance({
      privateKey: wallet.privateKey,
    });
    return Alert.alert('Wallet Balance:', walletBalance);
  }

  async function handleSendTransaction() {
    const wallet = await getDefaultWallet();
    const transactionResult = await sendTransaction({
      privateKey: wallet.privateKey,
    });
    console.log({ transactionResult });
  }

  async function handleDeleteAllWallets() {
    await AsyncStorage.clear();
    const resultAllWallets = await AsyncStorage.getAllKeys();
    console.log(
      '[resultAllWallets] - AsyncStorage allWallets',
      resultAllWallets
    );
  }

  return (
    <View
      style={[
        StyleSheet.absoluteFill,
        tw`flex-1 items-center justify-center bg-black`,
      ]}
    >
      <Button title="Create wallet" onPress={handleCreateWallet} />
      <Button title="Wallet Balance" onPress={handleShowBalance} />
      <Button title="Send Transaction" onPress={handleSendTransaction} />
      <Button title="Delete all wallets" onPress={handleDeleteAllWallets} />
    </View>
  );
}
