import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';

import { walletInit } from '../../core/wallet'

export function Wallet(): JSX.Element {

  async function handleCreateWallet() {
    const newWallet = await walletInit(null, null, null)
    console.log({newWallet})
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
      <Button title='Create wallet' onPress={handleCreateWallet} />
    </View>
  );
}
