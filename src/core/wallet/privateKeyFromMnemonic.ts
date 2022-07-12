import { mnemonicToSeed } from 'bip39';
import { hdkey } from 'ethereumjs-wallet';

export const privateKeyFromMnemonic = async (mnemonic: string) => {
  const seed = await mnemonicToSeed(mnemonic);
  const hdWallet = hdkey.fromMasterSeed(seed);
  const path = 'm/44\'/60\'/0\'/0'
  const root = hdWallet.derivePath(path);
  const child = root.deriveChild(0);
  const walletChild = child.getWallet();
  return walletChild.getPrivateKeyString();
};
