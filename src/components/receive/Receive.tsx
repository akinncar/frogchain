import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useMMKVString } from 'react-native-mmkv';
import QRCode from 'react-native-qrcode-svg';
import Clipboard from '@react-native-clipboard/clipboard';

import { tw } from '../ui/tailwind';
import { Copy } from '../ui/svg/icons/rn';

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

  const copyToClipboard = () => {
    Clipboard.setString(wallet.address);
  };

  return (
    <View style={tw`flex-1 items-center justify-center px-4`}>
      <QRCode size={170} value={wallet.address} />
      <View style={tw`flex-row items-center px-8`}>
        <Text
          style={tw`text-gray-200 text-center py-8 px-4`}
          numberOfLines={1}
          ellipsizeMode="middle"
        >
          {wallet.address}
        </Text>
        <TouchableOpacity onPress={copyToClipboard}>
          <Copy />
        </TouchableOpacity>
      </View>
    </View>
  );
}
