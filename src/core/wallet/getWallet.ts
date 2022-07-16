import { Wallet } from '@ethersproject/wallet';
import { InfuraProvider, JsonRpcProvider } from '@ethersproject/providers';
import { assets } from '../../constants/assets';

export function getWallet<T>({
  privateKey,
  assetName,
}: {
  readonly privateKey?: T | undefined;
  readonly assetName?: string;
}): T extends undefined ? undefined : Wallet {
  if (privateKey === undefined) return undefined;

  const mainnet = assetName
    ? assets[assetName].mainnet
    : assets['ethereum'].mainnet;

  // const provider = new InfuraProvider('rinkeby', {
  //   projectId: '31ca56ac9df649e8a872c6e6b3c6c4b9',
  //   projectSecret: 'e0bf386ec6dc411580520f78fa11631f',
  // });
  const provider = new JsonRpcProvider(mainnet);
  return new Wallet(privateKey, provider) as Wallet;
}
