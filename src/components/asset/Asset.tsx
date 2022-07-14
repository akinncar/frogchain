import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { LineGraph } from 'react-native-graph';

import { tw } from '../ui/tailwind';
import { assets } from '../../constants/assets';

import type { RootStackParamList } from '../../routes';

export function Asset(): JSX.Element {
  const route = useRoute<RouteProp<RootStackParamList, 'Asset'>>();
  const { assetName } = route.params;

  const asset = assets[assetName];

  const [graphData, setGraphData] = useState([]);

  const today = new Date(Date.now());
  const yesterday = new Date(Date.now() - 3600 * 1000 * 24);
  console.log({ today: today.getTime(), yesterday: yesterday.getTime() });

  useEffect(() => {
    loadPriceHistory1d();
  }, []);

  async function loadPriceHistory1d() {
    const response = await fetch(
      `https://api.binance.com/api/v3/klines?symbol=${asset.ticker}USDT&interval=3m&limit=480`
    );

    // 8h &interval=1m&limit=480
    // 24h &interval=3m&limit=480
    // 7d &interval=30m&limit=336

    // [
    //   [
    //     1499040000000,      // Open time
    //     "0.01634790",       // Open
    //     "0.80000000",       // High
    //     "0.01575800",       // Low
    //     "0.01577100",       // Close
    //     "148976.11427815",  // Volume
    //     1499644799999,      // Close time
    //     "2434.19055334",    // Quote asset volume
    //     308,                // Number of trades
    //     "1756.87402397",    // Taker buy base asset volume
    //     "28.46694368",      // Taker buy quote asset volume
    //     "17928899.62484339" // Ignore.
    //   ]
    // ]

    const data = await response.json();
    setGraphData(
      data.map(d => ({
        date: d[6],
        value: d[4],
      }))
    );
  }

  return (
    <View style={tw`flex-1 items-center justify-center bg-black px-4`}>
      <Text style={tw`text-white text-right font-bold`}>{asset.ticker}</Text>
      <LineGraph
        points={graphData}
        color="#A657E4"
        animated={false}
        style={tw`h-40 w-full`}
      />
    </View>
  );
}
