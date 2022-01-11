import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function Home(): JSX.Element {
  const ws = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@aggTrade');

  const [btc, setBtc] = useState(0);

  ws.onopen = () => {
    ws.send({
      method: 'SUBSCRIBE',
      params: ['btcusdt@aggTrade', 'ethusdt@aggTrade'],
      id: 1,
    });
  };

  ws.onmessage = e => {
    const data = JSON.parse(e.data);
    setBtc(data.p);
    console.log(`${data.s}: ${data.p}`);
  };

  ws.onerror = e => {
    console.log(e.message);
  };

  return (
    <View
      style={[
        StyleSheet.absoluteFill,
        {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        },
      ]}
    >
      <Text>BTC Price: {btc}</Text>
    </View>
  );
}
