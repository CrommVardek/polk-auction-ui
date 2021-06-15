import { RelayChain } from '../../models/Chain';
import Action from '../models/Action.types';
import { createAction } from '../utilities/ActionUtility';

export const SELECT_RELAY_CHAIN = 'ApplicationState.SELECT_RELAY_CHAIN';

export const selectRelayChain: (relayChain: RelayChain) => Action<RelayChain> = (relayChain: RelayChain) => {
  return createAction(SELECT_RELAY_CHAIN, relayChain);
};
