/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-waffle");
require("dotenv/config");

const { HARDHAT_PORT } = process.env;

module.exports = {
  solidity: "0.7.3",
  networks: {
    localhost: { url: `http://127.0.0.1:${HARDHAT_PORT}` },
    hardhat: {
      accounts: [{"privateKey":"0x7dc7f176a2d2ce3639d5c549452149936835ddfac8e7b827980b5b567cfb2647","balance":"1000000000000000000000"},{"privateKey":"0x3da55908ab2f73578cc5ad8a28105298e20f8de62e8fef4466a4f2ff1703b259","balance":"1000000000000000000000"},{"privateKey":"0xa5338783311732cbc16a2b422dd3614100814aa375e405572e53f87bfe66b432","balance":"1000000000000000000000"},{"privateKey":"0x258d069ef63d487595ecda8605833c221701e98cc4642214d9f08092dcdeca00","balance":"1000000000000000000000"},{"privateKey":"0x6d80e9acfe76b7bcda03043967f755191b02c3b654fd6d51544ec63c8c941121","balance":"1000000000000000000000"},{"privateKey":"0x8412af29526b4926e8f6c47a9d8e828fe6f3d0699b2fa5ab847eaca7bbe13dfb","balance":"1000000000000000000000"},{"privateKey":"0x6b3db6f24203ba885b89d2c5389b2b1d0194a374e8344e78bd2f757efc05c51b","balance":"1000000000000000000000"},{"privateKey":"0xfee16ab2b4ede6762233c0d5871f2da93491b52854d6af2d68f9d7bbc5082bc2","balance":"1000000000000000000000"},{"privateKey":"0x88d28d1c2a8b2ceabcf3a41d090e081074a1e3da91f0f619a26ccbcd4b707307","balance":"1000000000000000000000"},{"privateKey":"0x472160cb73149abad3cc8452ce729f1bf1aa74fe3543859d779cb9d335c44edc","balance":"1000000000000000000000"}]
    },
  },
  paths: {
    sources: './contracts',
    tests: './__tests__/contracts',
    cache: './cache',
    artifacts: './artifacts',
  },
};