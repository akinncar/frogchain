import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { tw } from '../ui/tailwind';
import { assets } from '../../constants/assets';

import assetIcons from '../ui/svg/asset-icon';

export function AssetRow({ assetName }): JSX.Element {
  const navigation = useNavigation();

  const asset = assets[assetName];

  const Icon = assetIcons[assetName];

  const [price, setPrice] = useState('0.0');

  useEffect(() => {
    const wsPrice = new WebSocket(
      `wss://stream.binance.com:9443/ws/${asset.webSocketTicker}usdt@aggTrade`
    );

    wsPrice.onmessage = event => {
      const data = JSON.parse(event?.data);

      if (data.p && data.p !== price) {
        setPrice(data?.p);
      }
    };
  }, []);

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Asset', { assetName })}
      style={tw`p-4 my-2 flex-row rounded-lg items-center justify-between bg-background`}
    >
      <>
        <Icon />
        <View style={tw`content-center`}>
          <Text style={tw`text-white pl-4 font-bold`}>{asset.ticker}</Text>
          <Text style={tw`text-white pl-4 opacity-50	pt-1`}>{asset.label}</Text>
        </View>
      </>
      <Text style={tw`flex-1 text-white text-right`}>
        {parseFloat(price).toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
        })}
      </Text>
    </TouchableOpacity>
  );
}
