import { Lease } from './Lease';

export interface RelayChain extends Blockchain {
  mainColor: string;
  secondaryColor?: string;
  website?: string;
  planckDenomination?: Number;
}

export interface Parachain extends Blockchain {
  paraId: number;
  currentLeases: Lease[];
  parachainLifeCycle: string;
}

export type Blockchain = {
  name: string;
  unit: string;
};
