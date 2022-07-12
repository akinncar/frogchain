import 'react-native-get-random-values';
import '@ethersproject/shims';
import { Wallet } from '@ethersproject/wallet';
import { InfuraProvider } from '@ethersproject/providers';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { generateMnemonic } from 'bip39';

import { privateKeyFromMnemonic } from './privateKeyFromMnemonic';
import { getAllWallets } from './getAllWallets';

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
    const provider = new InfuraProvider(
      'rinkeby',
      '31ca56ac9df649e8a872c6e6b3c6c4b9'
    );
    const wallet = new Wallet(privateKey, provider);

    const walletAddress = wallet.address;

    // eslint-disable-next-line prefer-const
    let allWallets = await getAllWallets();

    const id = `wallet_${Date.now()}`;

    await AsyncStorage.setItem('WalletMnemonic', mnemonic);
    console.log('[createWallet] - saved seed phrase');

    await AsyncStorage.setItem('WalletAddress', walletAddress);
    console.log('[createWallet] - saved address');

    await AsyncStorage.setItem('WalletPrivateKey', privateKey);
    console.log('[createWallet] - saved private key');

    allWallets.push({
      addresses: [
        { address: walletAddress, index: 0, label: '', visible: true },
      ],
      backedUp: false,
      id,
      name: DEFAULT_WALLET_NAME,
      primary: true,
      mnemonic, // remove later
      privateKey, // remove later
    });

    await AsyncStorage.setItem('allWallets', JSON.stringify(allWallets));
    console.log('[createWallet] - save allWallets');

    const resultAllWallets = await AsyncStorage.getAllKeys();
    console.log(
      '[resultAllWallets] - AsyncStorage allWallets',
      resultAllWallets
    );

    return wallet;
  } catch (error) {
    console.log('Error in createWallet', error);
    return null;
  }
};
