import React, { useEffect, useState } from 'react';
import { Alert, Button, StyleSheet, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { getWalletBalance, walletInit } from '../../core/wallet';

export function Wallet(): JSX.Element {
  async function handleCreateWallet() {
    const newWallet = await walletInit(null, null, null);
    console.log({ newWallet });
  }

  async function handleSendTransaction() {
    const privateKey = await AsyncStorage.getItem(
      'WalletPrivateKey 0x83b7cccE2D0579ED8cA5948f082FD6cEd79DDb05'
    );
    const walletBalance = await getWalletBalance(privateKey);
    return Alert.alert('Wallet Balance:', walletBalance);
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
        {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 16,
        },
      ]}
    >
      <Button title="Create wallet" onPress={handleCreateWallet} />
      <Button title="Wallet Balance" onPress={handleSendTransaction} />
      <Button title="Delete all wallets" onPress={handleDeleteAllWallets} />
    </View>
  );
}
