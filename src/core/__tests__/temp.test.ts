import { privateKeyFromMnemonic } from '../temp';

describe('wallet', () => {
  it('generates wallet with correct private key', async () => {
    const mnemonic = 'test test test test test test test test test test test junk';

    const privateKey = await privateKeyFromMnemonic(mnemonic);

    expect(privateKey).toEqual('0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80');
  });
});