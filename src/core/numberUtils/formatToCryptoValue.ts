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
  const assetTicker = assets[assetName].ticker;
  if (!value) return `0 ${assetTicker}`;
  const etherValue = formatEther(value);
  return `${Math.round(etherValue * 1e4) / 1e4} ${assetTicker}`;
}
