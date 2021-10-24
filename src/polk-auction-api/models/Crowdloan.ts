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
  lastPeriod: string;
  trieIndex: string;
}

interface FundExtended {
  parachainId: number;
  parachainName?: string;
  website?: string;
  polkadotJsExplorerUrl?: string;
  fundInfo: FundInfo;
}

export interface CrowdloanExtended {
  funds: FundExtended[];
}
