import React from 'react';
import { Text, View } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { useMMKVString } from 'react-native-mmkv';

import { tw } from '../ui/tailwind';
import type { RootStackParamList } from '../../routes';

import { Button } from '../ui/button/Button';
import { TextInput } from '../ui/textInput/TextInput';
import { sendTransaction } from '../../core/wallet/sendTransaction';

export function Send(): JSX.Element {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<RootStackParamList, 'Receive'>>();
  const { assetName, updateTransactionHistory } = route.params;

  const [privateKey] = useMMKVString('wallet.private-key');
  const [toAddress, setToAddress] = React.useState('');
  const [amount, setAmount] = React.useState('0.01');
  const [isLoading, setIsLoading] = React.useState(false);

  async function handleSendTransaction() {
    setIsLoading(true);
    const transactionResult = await sendTransaction({
      privateKey,
      assetName,
      toAddress,
      amount,
    });
    updateTransactionHistory(transactionResult);
    setIsLoading(false);
    navigation.goBack();
  }

  return (
    <View style={tw`flex-1 items-center justify-center px-4`}>
      <Text style={tw`text-white text-center mb-4`}>Send</Text>
      <TextInput
        value={toAddress}
        onChangeText={text => setToAddress(text)}
        style={tw`mb-4`}
        placeholder="Enter a wallet address..."
      />
      <TextInput
        value={amount}
        onChangeText={text => setAmount(text)}
        style={tw`mb-4`}
        placeholder="Enter an amount..."
      />
      <Button
        title="Send"
        onPress={handleSendTransaction}
        loading={isLoading}
      />
    </View>
  );
}
