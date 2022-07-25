import 'react-native-get-random-values';
import '@ethersproject/shims';
import { parseEther } from '@ethersproject/units';
import { hexlify } from 'ethers/lib/utils';

import { getWallet } from './getWallet';

export const sendTransaction = async ({
  privateKey,
  assetName,
  toAddress,
  amount,
}: {
  readonly privateKey: string;
  readonly assetName: string;
  readonly toAddress: string;
  readonly amount: string;
}) => {
  const wallet = getWallet({ privateKey, assetName });
  const provider = wallet.provider;

  const gasPrice = provider.getGasPrice();

  const sendAccount = wallet.address;
  const gasLimit = 100000;

  const transaction = {
    from: sendAccount,
    to: toAddress,
    value: parseEther(amount), // 0.1
    nonce: provider.getTransactionCount(sendAccount, 'latest'),
    gasLimit: hexlify(gasLimit), // 100000
    gasPrice: gasPrice,
    chainId: (await provider.getNetwork()).chainId,
  };

  try {
    const result = await wallet.sendTransaction(transaction);
    console.log('transaction result', result);
    return result;
  } catch (err) {
    console.log({ err });
  }
};
