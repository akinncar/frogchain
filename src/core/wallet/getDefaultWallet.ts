import { getAllWallets } from './getAllWallets';

export const getDefaultWallet = async () => {
  const allWallets = await getAllWallets();
  return allWallets[0] ? allWallets[0] : null;
};
