import 'react-native-get-random-values';
import '@ethersproject/shims';
import { formatEther } from '@ethersproject/units';
import { getWallet } from './getWallet';

type Params = {
  readonly privateKey: string;
};

export const getWalletBalance = async ({ privateKey }: Params) => {
  const wallet = getWallet(privateKey);

  try {
    const walletBalance = await wallet.getBalance();
    const formattedWalletBalance = formatEther(walletBalance.toString());

    return formattedWalletBalance;
  } catch (err) {
    console.log({ err });
  }
};
