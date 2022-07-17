import { formatEther } from '@ethersproject/units';
import { BigNumber } from 'ethers';

export function formatBigNumbertToEther(bigNumber: BigNumber): string {
  return formatEther(bigNumber.toString());
}
