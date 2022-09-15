import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'FishFrenly',
  tokenName: 'Fish Frenly',
  tokenSymbol: 'FFT',
  hiddenMetadataUri: 'ipfs://QmV1VQJ98c2svYz8LZn52fZf1gSexvbxvU6rSFz931oTUK/hidden.json',
  maxSupply: 3333,
  whitelistSale: {
    price: 0.000001,
    maxMintAmountPerTx: 10,
  },
  preSale: {
    price: 0.000001,
    maxMintAmountPerTx: 10,
  },
  publicSale: {
    price: 0.000001,
    maxMintAmountPerTx: 10,
  },
  contractAddress: "0x5965eB2bBff9D703B29D81C5A9CB621E681DaA21",
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
