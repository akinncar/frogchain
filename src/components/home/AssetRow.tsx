import React from 'react';
import { Text, View } from 'react-native';
import { tw } from '../ui/tailwind';
import assetIcons from '../ui/svg/asset-icon';

export function AssetRow({ ticker, price }): JSX.Element {
  const Icon = assetIcons[ticker];

  return (
    <View
      style={tw`p-4 my-2 flex-row rounded-lg items-center justify-between bg-background`}
    >
      <>
        <Icon />
        <Text style={tw`text-white pl-4`}>{ticker}</Text>
      </>
      <Text style={tw`flex-1 text-white text-right`}>
        {parseFloat(price).toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
        })}
      </Text>
    </View>
  );
}
