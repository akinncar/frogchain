import { Wallet } from '@ethersproject/wallet';
import { InfuraProvider } from '@ethersproject/providers';

export function getWallet<T>(
  privateKey?: T | undefined
): T extends undefined ? undefined : Wallet {
  if (privateKey === undefined) return undefined;

  const provider = new InfuraProvider('rinkeby', {
    projectId: '31ca56ac9df649e8a872c6e6b3c6c4b9',
    projectSecret: 'e0bf386ec6dc411580520f78fa11631f',
  });
  return new Wallet(privateKey, provider) as Wallet;
}
