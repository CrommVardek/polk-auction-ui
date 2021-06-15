import { RelayChain } from '../../models/Chain';

export interface ApplicationState {
  readonly currentRelayChain?: RelayChain;
}
