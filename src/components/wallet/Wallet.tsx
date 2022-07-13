import React from 'react';
import { Alert, Button, StyleSheet, View } from 'react-native';
import { useMMKVString } from 'react-native-mmkv';

import { tw } from '../ui/tailwind';

import { walletInit } from '../../core/wallet/walletInit';
import { getWalletBalance } from '../../core/wallet/getWalletBalance';
import { sendTransaction } from '../../core/wallet/sendTransaction';
import { storage } from '../../core/storage/storage';

export function Wallet(): JSX.Element {
  const [walletPrivateKey] = useMMKVString('wallet.private-key');

  async function handleCreateWallet() {
    const newWallet = await walletInit({
      seedPhrase: null,
      network: null,
    });
    console.log({ newWallet });
  }

  async function handleShowBalance() {
    const walletBalance = await getWalletBalance({
      privateKey: walletPrivateKey,
    });
    return Alert.alert('Wallet Balance:', walletBalance);
  }

  async function handleSendTransaction() {
    const transactionResult = await sendTransaction({
      privateKey: walletPrivateKey,
    });
    console.log({ transactionResult });
  }

  async function handleDeleteAllWallets() {
    storage.clearAll();
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
