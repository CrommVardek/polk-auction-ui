import { LeasePeriod } from './Lease';

interface Bid {
  accountId: string;
  parachainId?: number;
  amount: number;
  parachainName: string;
  website: string;
  polkadotJsExplorerUrl: string;
}

interface WinningInformation {
  bid?: Bid;
  description: string;
  leases: Array<string>;
}

export interface Auction {
  beginEnd: string;
  finishEnd: string;
  phase: string;
  auctionIndex: number;
  leasePeriods: Array<LeasePeriod>;
  currentWinning: Array<WinningInformation>;
}
