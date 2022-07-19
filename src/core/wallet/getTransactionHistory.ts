import 'react-native-get-random-values';
import '@ethersproject/shims';
import { EtherscanProvider } from '@ethersproject/providers';

import { assets } from '../../constants/assets';
import { getWallet } from './getWallet';

type Params = {
  readonly privateKey: string;
  readonly assetName?: string;
};

const getHistory = async ({ address, assetName }) => {
  const { apiUrl } = assets[assetName];

  const response = await fetch(
    `${apiUrl}?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=YourApiKeyToken`
  );

  const data = await response.json();
  return data.result;
};

export const getTransactionHistory = async ({
  privateKey,
  assetName,
}: Params) => {
  const wallet = getWallet({ privateKey, assetName });

  try {
    const transactionHistory = await getHistory({
      address: wallet.address,
      assetName,
    });
    return transactionHistory;
  } catch (err) {
    console.log({ err });
  }
};
