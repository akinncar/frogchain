import React from 'react';
import { Text, View } from 'react-native';
import { useMMKVString } from 'react-native-mmkv';
import { formatBigNumbertToEther } from '../../core/numberUtils/formatBigNumbertToEther';
import { getWallet } from '../../core/wallet/getWallet';

import { tw } from '../ui/tailwind';

export function Transaction({ transaction, assetName }) {
  const [privateKey] = useMMKVString('wallet.private-key');

  const wallet = getWallet({
    privateKey,
    assetName,
  });

  const isReceived = transaction.to === wallet.address;

  console.log({ transaction });
  return (
    <View style={tw`justify-between  flex-row p-4 rounded-lg bg-background`}>
      <Text style={tw`text-white`}>{isReceived ? 'Received' : 'Sent'}</Text>
      <Text style={tw`text-white`}>
        {formatBigNumbertToEther(transaction.value)}
      </Text>
    </View>
  );
}
