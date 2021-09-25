import { Parachain } from '../../models/Chain';

export interface ParachainExtended {
  parachain: Parachain;
  parachainName?: string;
  polkadotJsExplorerUrl?: string;
  relayChainName?: string;
  website?: string;
}
