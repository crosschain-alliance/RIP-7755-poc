import type { Address, Block, Hex } from "viem";

export type L2Block = Block & { parentBeaconBlockRoot: Hex; number: bigint };

export type GetBeaconRootAndL2TimestampReturnType = {
  beaconRoot: Hex;
  timestampForL2BeaconOracle: bigint;
};

export type DecodedNodeCreatedLog = { args: { assertion: any } };

export type ChainConfig = {
  chainId: number;
  proverContracts: Record<number, Address>;
  rpcUrl: string;
  outboxContract: Address;
  inboxContract: Address;
  l2Oracle: Address;
  l2OracleStorageKey: Address;
  publicClient: any;
  contracts: Record<string, Address>;
};

export enum SupportedChains {
  ArbitrumSepolia = 421614,
  BaseSepolia = 84532,
  OptimismSepolia = 11155420,
  Sepolia = 11155111,
}

export type ActiveChains = {
  src: ChainConfig;
  l1: ChainConfig;
  dst: ChainConfig;
};
