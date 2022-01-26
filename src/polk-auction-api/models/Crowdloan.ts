interface Verifier {
  sr25519: string;
}

interface FundInfo {
  depositor: string;
  verifier?: Verifier;
  deposit: number;
  raised: number;
  end: number;
  cap: number;
  firstPeriod: string;
  firstPeriodStartTimeStamp: number;
  lastPeriod: string;
  lastPeriodEndTimeStamp: number;
  trieIndex: string;
  state: string;
}

export interface Fund {
  parachainId: number;
  parachainName?: string;
  website?: string;
  polkadotJsExplorerUrl?: string;
  fundInfo: FundInfo;
}

export interface Crowdloan {
  funds: Fund[];
}
