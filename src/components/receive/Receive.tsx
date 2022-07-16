import React from 'react';
import { Text, View } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useMMKVString } from 'react-native-mmkv';
import QRCode from 'react-native-qrcode-svg';

import { tw } from '../ui/tailwind';

import type { RootStackParamList } from '../../routes';
import { getWallet } from '../../core/wallet/getWallet';

export function Receive(): JSX.Element {
  const route = useRoute<RouteProp<RootStackParamList, 'Receive'>>();
  const { assetName } = route.params;

  const [privateKey] = useMMKVString('wallet.private-key');

  const wallet = getWallet({
    privateKey,
    assetName,
  });

  return (
    <View style={tw`flex-1 items-center justify-center bg-black px-4`}>
      <QRCode size={170} value={wallet.address} />
      <Text style={tw`text-white text-center p-8`}>{wallet.address}</Text>
    </View>
  );
}
