import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { CryptoCurrencyCard } from './CryptoCurrencyCard';

export function Home(): JSX.Element {
  const [BTC, setBTC] = useState('0.0');
  const [ETH, setETH] = useState('0.0');

  useEffect(() => {
    const wsBTC = new WebSocket(
      'wss://stream.binance.com:9443/ws/btcusdt@aggTrade'
    );
    const wsETH = new WebSocket(
      'wss://stream.binance.com:9443/ws/ethusdt@aggTrade'
    );

    wsBTC.onmessage = event => {
      const data = JSON.parse(event?.data);

      if (data.p && data.p !== BTC) {
        setBTC(data?.p);
      }
    };

    wsETH.onmessage = event => {
      const data = JSON.parse(event?.data);

      if (data.p && data.p !== ETH) {
        setETH(data?.p);
      }
    };
  }, []);

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
      <CryptoCurrencyCard title="BTC" price={BTC} />
      <CryptoCurrencyCard title="ETH" price={ETH} />
    </View>
  );
}
