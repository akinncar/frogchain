import 'react-native-get-random-values';
import '@ethersproject/shims';
import { parseEther } from '@ethersproject/units';
import { hexlify } from 'ethers/lib/utils';

import { getWallet } from './getWallet';

export const sendTransaction = async ({
  privateKey,
}: {
  readonly privateKey: string;
}) => {
  const wallet = getWallet({ privateKey });
  const provider = wallet.provider;

  const gasPrice = provider.getGasPrice();

  const sendAccount = wallet.address;
  const gasLimit = 100000;

  const transaction = {
    from: sendAccount,
    to: '0x4B43B8EBB73241B9eDb2878B42531A115a09Bd76',
    value: parseEther('0.1'),
    nonce: provider.getTransactionCount(sendAccount, 'latest'),
    gasLimit: hexlify(gasLimit), // 100000
    gasPrice: gasPrice,
  };

  try {
    const result = await wallet.sendTransaction(transaction);
    console.log('transaction result', result);
    return { result };
  } catch (err) {
    console.log({ err });
  }
};
