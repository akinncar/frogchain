import React from 'react';
import { Text, View } from 'react-native';
import { useMMKVString } from 'react-native-mmkv';

import { tw } from '../ui/tailwind';
import { formatToCryptoValue } from '../../core/numberUtils/formatToCryptoValue';
import { getWallet } from '../../core/wallet/getWallet';

import * as Icons from '../ui/svg/icons/rn';

export function Transaction({
  transaction,
  assetName,
  style,
  ...props
}: {
  transaction: any;
  assetName: string;
  style?: any;
}) {
  const [privateKey] = useMMKVString('wallet.private-key');

  const wallet = getWallet({
    privateKey,
    assetName,
  });

  const isReceived =
    transaction.to.toLowerCase() === wallet.address.toLowerCase();

  return (
    <View
      style={tw.style(
        'justify-between flex-row px-4 py-5 rounded-lg bg-background items-center',
        style
      )}
      {...props}
    >
      <View style={tw`flex-row items-center`}>
        {isReceived ? <Icons.Receive /> : <Icons.Send />}
        <Text style={tw`text-white pl-2`}>
          {isReceived ? 'Received' : 'Sent'}
        </Text>
      </View>
      <Text style={tw`text-white`}>
        {formatToCryptoValue({ value: transaction.value, assetName })}
      </Text>
    </View>
  );
}
