export interface RelayChain extends Blockchain {
  mainColor: string;
  secondaryColor?: string;
  website?: string;
  planckDenomination?: Number;
}

export interface Parachain extends Blockchain {
  parachainId: number;
}

export type Blockchain = {
  name: string;
  unit: string;
};
