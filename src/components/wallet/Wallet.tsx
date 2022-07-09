import React, {useEffect, useState} from 'react';
import {Alert, Button, StyleSheet, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {tw} from '../ui/tailwind';

import {getWalletBalance, sendTransaction, walletInit} from '../../core/wallet';

export function Wallet(): JSX.Element {
  async function handleCreateWallet() {
    const newWallet = await walletInit({
      seedPhrase: null,
      network: null,
    });
    console.log({newWallet});
  }

  async function handleShowBalance() {
    const privateKey = await AsyncStorage.getItem(
      'WalletPrivateKey 0x6ae8018b258e978375d7e51af3d3c7891c0fcdb5',
    );
    const walletBalance = await getWalletBalance(privateKey);
    return Alert.alert('Wallet Balance:', walletBalance);
  }

  async function handleSendTransaction() {
    const privateKey = await AsyncStorage.getItem(
      'WalletPrivateKey 0x83b7cccE2D0579ED8cA5948f082FD6cEd79DDb05',
    );
    const transactionResult = await sendTransaction({privateKey});
    console.log({transactionResult});
  }

  async function handleDeleteAllWallets() {
    await AsyncStorage.clear();
    const resultAllWallets = await AsyncStorage.getAllKeys();
    console.log(
      '[resultAllWallets] - AsyncStorage allWallets',
      resultAllWallets,
    );
  }

  return (
    <View
      style={[
        StyleSheet.absoluteFill,
        tw`flex-1 items-center justify-center bg-black`,
      ]}>
      <Button title="Create wallet" onPress={handleCreateWallet} />
      <Button title="Wallet Balance" onPress={handleShowBalance} />
      <Button title="Send Transaction" onPress={handleSendTransaction} />
      <Button title="Delete all wallets" onPress={handleDeleteAllWallets} />
    </View>
  );
}
