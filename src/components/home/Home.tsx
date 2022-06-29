import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import tw from 'twrnc';

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
    <View style={[StyleSheet.absoluteFill, tw`justify-center bg-black px-4`]}>
      <CryptoCurrencyCard title="BTC" price={BTC} />
      <CryptoCurrencyCard title="ETH" price={ETH} />
    </View>
  );
}
