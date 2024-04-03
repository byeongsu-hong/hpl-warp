import { ChainMap, ChainMetadata, ExplorerFamily } from '@hyperlane-xyz/sdk';
import { ProtocolType } from '@hyperlane-xyz/utils';

// A map of chain names to ChainMetadata
// Chains can be defined here, in chains.json, or in chains.yaml
// Chains already in the SDK need not be included here unless you want to override some fields
// Schema here: https://github.com/hyperlane-xyz/hyperlane-monorepo/blob/main/typescript/sdk/src/metadata/chainMetadataTypes.ts
export const chains: ChainMap<ChainMetadata & { mailbox?: Address }> = {
  osmosis1: {
    protocol: ProtocolType.Cosmos,
    name: 'osmosis1',
    chainId: 'osmosis-1',
    domainId: 875,
    displayName: 'Osmosis Mainnet',
    displayNameShort: 'Osmosis',
    slip44: 118,
    bech32Prefix: 'osmo',
    rpcUrls: [{ http: 'https://rpc.osmosis.zone:443' }],
    restUrls: [{ http: 'https://rest.osmosis.zone:443' }],
    grpcUrls: [{ http: 'https://grpc.osmosis.zone:443' }],
    nativeToken: {
      name: 'Osmosis',
      denom: 'uosmo',
      symbol: 'OSMO',
      decimals: 6,
    },
    blockExplorers: [
      {
        name: 'Mintscan',
        url: 'https://www.mintscan.io/osmosis',
        // TODO API not supported, using url to meet validation requirements
        apiUrl: 'https://www.mintscan.io/celestia',
        family: ExplorerFamily.Other,
      },
    ],
    transactionOverrides: {
      gasPrice: 0.1,
    },
  },

  celestia: {
    protocol: ProtocolType.Cosmos,
    domainId: 123456789, // TODO not a real domain id
    chainId: 'celestia',
    name: 'celestia',
    displayName: 'Celestia',
    bech32Prefix: 'celestia',
    slip44: 118,
    nativeToken: {
      name: 'Tia',
      symbol: 'TIA',
      decimals: 6,
      denom: 'utia',
    },
    grpcUrls: [{ http: 'https://grpc.celestia.nodestake.top' }],
    restUrls: [{ http: 'https://public-celestia-lcd.numia.xyz' }],
    rpcUrls: [{ http: 'https://public-celestia-rpc.numia.xyz' }],
    blockExplorers: [
      {
        name: 'MintScan',
        url: 'https://www.mintscan.io/celestia',
        // TODO API not supported, using url to meet validation requirements
        apiUrl: 'https://www.mintscan.io/celestia',
        family: ExplorerFamily.Other,
      },
    ],
    logoURI: '/logos/celestia.png',
    transactionOverrides: {
      gasPrice: 0.1,
    },
  },
};
