type Lease = {
  leaseIndexPeriod: String;
  account: String;
  deposit: Number;
};

export interface Parachain {
  parachainId: number;
  currentLeases: Lease[];
  parachainLifeCycle: string;
  parachainName?: string;
  polkadotJsExplorerUrl?: string;
  relayChainName?: string;
  website?: string;
}
