import React, { useEffect, useState } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { tw } from '../ui/tailwind';

import { AssetRow } from './AssetRow';

export function Home(): JSX.Element {
  const [BTC, setBTC] = useState('0.0');
  const [ETH, setETH] = useState('0.0');
  const [FTM, setFTM] = useState('0.0');

  useEffect(() => {
    const wsBTC = new WebSocket(
      'wss://stream.binance.com:9443/ws/btcusdt@aggTrade'
    );
    const wsETH = new WebSocket(
      'wss://stream.binance.com:9443/ws/ethusdt@aggTrade'
    );
    const wsFTM = new WebSocket(
      'wss://stream.binance.com:9443/ws/ftmusdt@aggTrade'
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

    wsFTM.onmessage = event => {
      const data = JSON.parse(event?.data);

      if (data.p && data.p !== FTM) {
        setFTM(data?.p);
      }
    };
  }, []);

  return (
    <View style={[StyleSheet.absoluteFill, tw`justify-center bg-black px-4`]}>
      <ImageBackground
        source={require('../ui/png/background.png')}
        resizeMode="cover"
        style={StyleSheet.absoluteFill}
      />
      <AssetRow ticker="BTC" price={BTC} />
      <AssetRow ticker="ETH" price={ETH} />
      <AssetRow ticker="FTM" price={FTM} />
    </View>
  );
}
