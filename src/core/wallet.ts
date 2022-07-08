import 'react-native-get-random-values';
import '@ethersproject/shims';
import {Wallet} from '@ethersproject/wallet';
import {InfuraProvider} from '@ethersproject/providers';
import {formatEther, parseEther} from '@ethersproject/units';
import {providers, utils} from 'ethers';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {generateMnemonic, mnemonicToSeed} from 'bip39';
import {addHexPrefix} from 'ethereumjs-util';
import {isEmpty} from 'lodash';
import {hexlify} from 'ethers/lib/utils';
import {hdkey} from 'ethereumjs-wallet';

// import randomBytes from 'randombytes';

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

export const getAllWallets = async (): Promise<Array<any>> => {
  const allWallets = await AsyncStorage.getItem('allWallets');
  return allWallets ? JSON.parse(allWallets) : [];
};

export const walletInit = async (
  {seedPhrase, network} = {
    seedPhrase: null,
    network: null,
  },
): Promise<WalletInitialized> => {
  let walletAddress = null;
  let isNew = false;

  if (!isEmpty(seedPhrase)) {
    const wallet = await createWallet(seedPhrase);
    walletAddress = wallet?.address;
    console.log({walletAddress});
    return {isNew, walletAddress};
  }

  if (!walletAddress) {
    const wallet = await createWallet();
    walletAddress = wallet?.address;
    isNew = true;
    console.log('walletAddress?.toLowerCase()', walletAddress?.toLowerCase());
    console.log('network', network);
  }
  return {isNew, walletAddress};
};

export const createWallet = async (
  seedPhrase: null | string = null,
): Promise<null | EthereumWallet> => {
  console.log('Creating wallet');
  console.log('Generating a new seed phrase');
  const mnemonic = seedPhrase || generateMnemonic();
  const addresses = [];

  try {
    console.log({mnemonic});
    const seed = await mnemonicToSeed(mnemonic);
    const hdWallet = hdkey.fromMasterSeed(seed);
    const root = hdWallet.derivePath("m/44'/60'/0'");
    const child = root.deriveChild(0);
    const walletChild = child.getWallet();
    const privateKey = walletChild.getPrivateKeyString();
    // const privateKey = addHexPrefix(seed.toString('hex'));
    const provider = new InfuraProvider(
      'rinkeby',
      '31ca56ac9df649e8a872c6e6b3c6c4b9',
    );
    const wallet = new Wallet(privateKey, provider);
    // let mnemonicWallet = Wallet.fromMnemonic(mnemonic);
    // console.log('hey', mnemonicWallet.privateKey);

    const walletAddress = wallet.address;
    console.log('[createWallet] - getWallet from seed');

    // Get all wallets
    console.log('[createWallet] - getAllWallets');
    // eslint-disable-next-line prefer-const
    let allWallets = await getAllWallets();

    const id = `wallet_${Date.now()}`;
    console.log('[createWallet] - wallet ID', {id});

    // Save wallet seed
    await AsyncStorage.setItem(`WalletMnemonic ${walletAddress}`, mnemonic);
    console.log('[createWallet] - saved seed phrase');

    // Save address
    await AsyncStorage.setItem(`WalletAddress ${walletAddress}`, walletAddress);
    console.log('[createWallet] - saved address');

    // Save private key
    await AsyncStorage.setItem(`WalletPrivateKey ${walletAddress}`, privateKey);
    console.log('[createWallet] - saved private key');

    // if imported and we have only one account, we name the wallet too.
    const walletName = DEFAULT_WALLET_NAME;

    // allWallets[id] = {
    //   addresses: [{ address: walletAddress }],
    //   backedUp: false,
    //   id,
    //   name: walletName,
    //   primary: true,
    //   mnemonic, // remove later
    //   privateKey, // remove later
    // };
    allWallets.push({
      addresses: [{address: walletAddress, index: 0, label: '', visible: true}],
      backedUp: false,
      id,
      name: walletName,
      primary: true,
      mnemonic, // remove later
      privateKey, // remove later
    });

    // Save allWallets[id]
    // await AsyncStorage.setItem(
    //   `allWallets[${id}]`,
    //   JSON.stringify(allWallets[id])
    // );
    // console.log('[createWallet] - save allWallets[id]');

    // Save allWallets
    await AsyncStorage.setItem('allWallets', JSON.stringify(allWallets));
    console.log('[createWallet] - save allWallets');

    const resultAllWallets = await AsyncStorage.getAllKeys();
    console.log(
      '[resultAllWallets] - AsyncStorage allWallets',
      resultAllWallets,
    );

    console.log(
      'WalletAddress: ',
      await AsyncStorage.getItem(`WalletAddress ${walletAddress}`),
    );
    console.log(
      'WalletMnemonic: ',
      await AsyncStorage.getItem(`WalletMnemonic ${walletAddress}`),
    );
    console.log(
      'WalletPrivateKey: ',
      await AsyncStorage.getItem(`WalletPrivateKey ${walletAddress}`),
    );

    return wallet;
  } catch (error) {
    console.log('Error in createWallet', error);
    return null;
  }
};

export const getWalletBalance = async privateKey => {
  const provider = new providers.InfuraProvider('rinkeby', {
    projectId: '31ca56ac9df649e8a872c6e6b3c6c4b9',
    projectSecret: 'e0bf386ec6dc411580520f78fa11631f',
  });
  const wallet = new Wallet(privateKey, provider);

  try {
    const walletBalance = await wallet.getBalance();
    const formattedWalletBalance = formatEther(walletBalance.toString());

    return formattedWalletBalance;
  } catch (err) {
    console.log({err});
  }
};

export const sendTransaction = async ({privateKey}) => {
  const provider = new providers.InfuraProvider('rinkeby', {
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
    return {result};
  } catch (err) {
    console.log({err});
  }
};
