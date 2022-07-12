import 'react-native-get-random-values';
import '@ethersproject/shims';
import { Wallet } from '@ethersproject/wallet';
import { parseEther } from '@ethersproject/units';
import { InfuraProvider } from '@ethersproject/providers';
import { hexlify } from 'ethers/lib/utils';

export const sendTransaction = async ({ privateKey }) => {
  const provider = new InfuraProvider('rinkeby', {
    projectId: '31ca56ac9df649e8a872c6e6b3c6c4b9',
    projectSecret: 'e0bf386ec6dc411580520f78fa11631f',
  });
  const wallet = new Wallet(privateKey, provider);
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
