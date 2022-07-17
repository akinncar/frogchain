import 'react-native-get-random-values';
import '@ethersproject/shims';

import { getWallet } from './getWallet';
import { EtherscanProvider } from '@ethersproject/providers';

type Params = {
  readonly privateKey: string;
  readonly assetName?: string;
};

export const getTransactionHistory = async ({
  privateKey,
  assetName,
}: Params) => {
  const wallet = getWallet({ privateKey, assetName });

  try {
    const network = await wallet.provider.getNetwork();
    const networkProvider = new EtherscanProvider(network);
    const transactionHistory = await networkProvider.getHistory(wallet.address);
    return transactionHistory;
  } catch (err) {
    console.log({ err });
  }
};
