import { Wallet } from '@ethersproject/wallet';
import {
  InfuraProvider,
  JsonRpcProvider
} from '@ethersproject/providers';
import { providers } from 'ethers';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { generateMnemonic, mnemonicToSeed } from 'bip39';
import { addHexPrefix } from 'ethereumjs-util';
import { isEmpty } from 'lodash';
import randomBytes from 'randombytes'

export type EthereumPrivateKey = string;
type EthereumMnemonic = string;
type EthereumSeed = string;
export type EthereumWalletSeed =
  | any
  | EthereumPrivateKey
  | EthereumMnemonic
  | EthereumSeed;

type WalletInitialized = {
  readonly isNew: boolean;
  readonly walletAddress?: any;
};

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

export const walletInit = async (
  seedPhrase = null,
  name = null,
  network: string | null
): Promise<WalletInitialized> => {
  let walletAddress = null;
  let isNew = false;

  if (!isEmpty(seedPhrase)) {
    const wallet = await createWallet(name);
    walletAddress = wallet?.address;
    return { isNew, walletAddress };
  }

  if (!walletAddress) {
    const wallet = await createWallet();
    walletAddress = wallet?.address;
    isNew = true;
    console.log('walletAddress?.toLowerCase()', walletAddress?.toLowerCase())
    console.log('network', network)
  }
  return { isNew, walletAddress };
};

export const createWallet = async (
  name: null | string = null
): Promise<null | EthereumWallet> => {
  console.log('Creating wallet');
  console.log('Generating a new seed phrase');
  const mnemonic = generateMnemonic();
  const addresses = [];
  try {
    const seed = await mnemonicToSeed(mnemonic)
    const privateKey = addHexPrefix(seed.toString('hex'))
    const provider = new InfuraProvider('rinkeby', '31ca56ac9df649e8a872c6e6b3c6c4b9')
    const wallet = new Wallet(privateKey, provider)

    const walletAddress = wallet.address
    console.log('[createWallet] - getWallet from seed');

    // Get all wallets
    console.log('[createWallet] - getAllWallets');
    const allWallets = []

    const id = `wallet_${Date.now()}`;
    console.log('[createWallet] - wallet ID', { id });

    // Save wallet seed
    await AsyncStorage.setItem(`WalletMnemonic ${walletAddress}`, mnemonic)
    console.log('[createWallet] - saved seed phrase');

    // Save address
    await AsyncStorage.setItem(`WalletAddress ${walletAddress}`, walletAddress)
    console.log('[createWallet] - saved address');

    // Save private key
    await AsyncStorage.setItem(`WalletPrivateKey ${walletAddress}`, privateKey)
    console.log('[createWallet] - saved private key');

    // addresses.push({
    //   address: walletAddress,
    //   index: 0,
    //   label: name || '',
    //   visible: true,
    // });

    // if imported and we have only one account, we name the wallet too.
    const walletName = DEFAULT_WALLET_NAME;

    allWallets[id] = {
      addresses: [walletAddress],
      backedUp: false,
      id,
      name: walletName,
      primary: true,
      mnemonic, // remove later
      privateKey // remove later
    };

    // Save allWallets[id]
    await AsyncStorage.setItem(`allWallets[${id}]`, JSON.stringify(allWallets[id]))
    console.log('[createWallet] - save allWallets[id]');

    // Save allWallets
    await AsyncStorage.setItem('allWallets', JSON.stringify(allWallets))
    console.log('[createWallet] - save allWallets');

    const resultAllWallets = await AsyncStorage.getAllKeys();
    console.log('[resultAllWallets] - AsyncStorage allWallets', resultAllWallets);

    console.log('WalletAddress: ', await AsyncStorage.getItem(`WalletAddress ${walletAddress}`))
    console.log('WalletMnemonic: ', await AsyncStorage.getItem(`WalletMnemonic ${walletAddress}`))
    console.log('WalletPrivateKey: ', await AsyncStorage.getItem(`WalletPrivateKey ${walletAddress}`))

    const walletBalance = await wallet.getBalance()
    console.log({walletBalance})

    return wallet
  } catch (error) {
    console.log('Error in createWallet', error);
    return null;
  }
};

export const signTransaction = async (privateKey) => {
  console.log({privateKey})
  const provider = new providers.InfuraProvider('rinkeby', {
    projectId: '31ca56ac9df649e8a872c6e6b3c6c4b9',
    projectSecret: 'e0bf386ec6dc411580520f78fa11631f'
  });
  const wallet = new Wallet(privateKey, provider)

  try {
    // const walletBalance = await provider.getBalance('0x83b7cccE2D0579ED8cA5948f082FD6cEd79DDb05')
    const walletBalance = await wallet.getBalance()
    console.log({walletBalance})
  } catch (err) {
    console.log({err})
  }
}