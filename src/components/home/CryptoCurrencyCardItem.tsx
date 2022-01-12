import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import CryptocurrencyIcon from 'rn-crypto-icons';

export function CryptoCurrencyCardItem({ title, price }): JSX.Element {
  return (
    <View
      style={{
        width: '100%',
        padding: 16,
        marginVertical: 8,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#FFF',
      }}
    >
      <Text>{title}</Text>
      <CryptocurrencyIcon name="eth" size={48} />
      <Text>${price.split('.')[0]}</Text>
    </View>
  );
}
