import 'react-native-get-random-values';
import '@ethersproject/shims';
import { Wallet } from '@ethersproject/wallet';
import { InfuraProvider } from '@ethersproject/providers';
import { formatEther } from '@ethersproject/units';

export const getWalletBalance = async ({ privateKey }) => {
  const provider = new InfuraProvider('rinkeby', {
    projectId: '31ca56ac9df649e8a872c6e6b3c6c4b9',
    projectSecret: 'e0bf386ec6dc411580520f78fa11631f',
  });
  const wallet = new Wallet(privateKey, provider);

  try {
    const walletBalance = await wallet.getBalance();
    const formattedWalletBalance = formatEther(walletBalance.toString());

    return formattedWalletBalance;
  } catch (err) {
    console.log({ err });
  }
};
