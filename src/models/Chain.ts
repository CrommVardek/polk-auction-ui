import { Lease } from './Lease';

export interface RelayChain extends Blockchain {
  mainColor: string;
  secondaryColor?: string;
  website?: string;
}

export interface Parachain extends Blockchain {
  paraId: number;
  leasePeriods: Lease[];
}

export type Blockchain = {
  name: string;
  unit: string;
};
