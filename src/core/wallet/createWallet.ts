import 'react-native-get-random-values';
import '@ethersproject/shims';
import { Wallet } from '@ethersproject/wallet';
import { generateMnemonic } from 'bip39';

import { privateKeyFromMnemonic } from './privateKeyFromMnemonic';
import { storage } from '../storage/storage';
import { getWallet } from './getWallet';

export type EthereumPrivateKey = string;
type EthereumMnemonic = string;
type EthereumSeed = string;
export type EthereumWalletSeed =
  | any
  | EthereumPrivateKey
  | EthereumMnemonic
  | EthereumSeed;

type ReadOnlyWallet = {
  readonly address: any;
  readonly privateKey: null;
};

type EthereumWallet = Wallet | ReadOnlyWallet;

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

export const createWallet = async (
  seedPhrase: null | string = null
): Promise<null | EthereumWallet> => {
  console.log('Creating wallet');
  console.log('Generating a new seed phrase');
  const mnemonic = seedPhrase || generateMnemonic();

  try {
    console.log({ mnemonic });
    const privateKey = await privateKeyFromMnemonic(mnemonic);
    const wallet = getWallet(privateKey);

    const walletAddress = wallet.address;

    const id = `wallet_${Date.now()}`;

    storage.set('wallet.mnemonic', mnemonic);
    console.log('[createWallet] - saved mnemonic');

    storage.set('wallet.address', walletAddress);
    console.log('[createWallet] - saved address');

    storage.set('wallet.private-key', privateKey);
    console.log('[createWallet] - saved private key');

    return wallet;
  } catch (error) {
    console.log('Error in createWallet', error);
    return null;
  }
};
