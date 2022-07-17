import { assets } from './../../constants/assets';
import { formatEther } from '@ethersproject/units';
import { BigNumber } from 'ethers';

export function formatToCryptoValue({
  value,
  assetName,
}: {
  value: BigNumber;
  assetName: string;
}): string {
  if (!value || !assetName) return;
  return `${formatEther(value.toString())} ${assets[assetName].ticker}`;
}
