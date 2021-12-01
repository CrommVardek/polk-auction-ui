export interface RelayChain extends Blockchain {
  mainColor: string;
  secondaryColor?: string;
  website?: string;
  planckDenomination?: Number;
}

export type Blockchain = {
  name: string;
  unit: string;
};
