import 'react-native-get-random-values';
import '@ethersproject/shims';
import { isEmpty } from 'lodash';

import { createWallet } from './createWallet';

export type EthereumPrivateKey = string;
type EthereumMnemonic = string;
type EthereumSeed = string;
export type EthereumWalletSeed =
  | any
  | EthereumPrivateKey
  | EthereumMnemonic
  | EthereumSeed;

// eslint-disable-next-line @typescript-eslint/ban-types
type WalletInitialized = {};

type WalletInitParams = {
  readonly seedPhrase: string | null;
  readonly network: any;
};

export type SledAccount = {
  readonly index: number;
  readonly label: string;
  readonly address: any;
  readonly avatar: null | string;
  readonly color: number;
  readonly visible: boolean;
  readonly image: string | null;
};

export type SledWallet = {
  readonly addresses: readonly SledAccount[];
  readonly color: number;
  readonly id: string;
  readonly imported: boolean;
  readonly name: string;
  readonly primary: boolean;
  readonly type: any;
  readonly backedUp: boolean;
  readonly backupFile?: string;
  readonly backupDate?: string;
  readonly backupType?: string;
};

export type AllSledWallets = {
  readonly [key: string]: SledWallet;
};

export const allWalletsVersion = 1.0;

export const DEFAULT_WALLET_NAME = 'My Wallet';

export const walletInit = async (
  { seedPhrase, network }: WalletInitParams = {
    seedPhrase: null,
    network: null,
  }
): Promise<WalletInitialized> => {
  let walletAddress = null;
  let isNew = false;

  if (!isEmpty(seedPhrase)) {
    const wallet = await createWallet(seedPhrase);
    walletAddress = wallet?.address;
    console.log({ walletAddress });
    return { isNew, walletAddress };
  }

  if (!walletAddress) {
    const wallet = await createWallet();
    walletAddress = wallet?.address;
    isNew = true;
    console.log('walletAddress?.toLowerCase()', walletAddress?.toLowerCase());
    console.log('network', network);
  }
  return { isNew, walletAddress };
};
