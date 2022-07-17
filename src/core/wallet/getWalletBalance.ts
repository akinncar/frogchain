import 'react-native-get-random-values';
import '@ethersproject/shims';
import { formatEther } from '@ethersproject/units';
import { BigNumber } from 'ethers';

import { getWallet } from './getWallet';

type Params = {
  readonly privateKey: string;
  readonly assetName?: string;
};

export const getWalletBalance = async ({
  privateKey,
  assetName,
}: Params): Promise<any> => {
  const wallet = getWallet({ privateKey, assetName });

  try {
    const walletBalance = await wallet.getBalance();
    return walletBalance;
  } catch (err) {
    console.log({ err });
  }
};
