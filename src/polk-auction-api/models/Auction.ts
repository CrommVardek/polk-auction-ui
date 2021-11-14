interface BidExtended {
  accountId: string;
  parachainId?: number;
  amount: number;
  parachainName: string;
  website: string;
  polkadotJsExplorerUrl: string;
}

interface WinningInformationExtended {
  bid?: BidExtended;
  description: string;
  leases: Array<string>;
}

interface AuctionExtended {
  beginEnd: string;
  finishEnd: string;
  phase: string;
  auctionIndex: number;
  leasePeriods: Array<number>;
  currentWinning: Array<WinningInformationExtended>;
}
