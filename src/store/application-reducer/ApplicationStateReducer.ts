import { RelayChain } from '../../models/Chain';

//TODO and use
export const setRelayChain = (s: any) => (chain: RelayChain) => {
  s.currentRelayChain = chain;
};
