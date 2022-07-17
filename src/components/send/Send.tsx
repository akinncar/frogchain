import React from 'react';
import { Text, View } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useMMKVString } from 'react-native-mmkv';

import { tw } from '../ui/tailwind';
import type { RootStackParamList } from '../../routes';
import { getWallet } from '../../core/wallet/getWallet';

import { Button } from '../ui/button/Button';
import { TextInput } from '../ui/textInput/TextInput';

export function Send(): JSX.Element {
  const route = useRoute<RouteProp<RootStackParamList, 'Receive'>>();
  const { assetName } = route.params;

  const [privateKey] = useMMKVString('wallet.private-key');

  const wallet = getWallet({
    privateKey,
    assetName,
  });

  return (
    <View style={tw`flex-1 items-center justify-center px-4`}>
      <Text style={tw`text-white text-center`}>Send</Text>
      <TextInput style={tw`my-4`} placeholder="Enter a valid address..." />
      <Button title="Send" onPress={() => {}} />
    </View>
  );
}
