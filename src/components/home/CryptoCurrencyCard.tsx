import React from 'react';
import { Text, View } from 'react-native';
import tw from 'twrnc';

import CryptocurrencyIcon from 'rn-crypto-icons';

export function CryptoCurrencyCard({ title, price }): JSX.Element {
  return (
    <View style={tw`p-4 my-2 flex-row rounded-lg	justify-between bg-gray-800`}>
      <Text style={tw`text-white`}>{title}</Text>
      <CryptocurrencyIcon name="eth" size={48} />
      <Text style={tw`text-white`}>${price.split('.')[0]}</Text>
    </View>
  );
}
