import { createSelector } from 'reselect';
import { RootStore } from '../PolkAuctionStore';
import { ApplicationState } from './ApplicationState.types';

const selectApplicationState = createSelector(
  (state: RootStore) => state.applicationState,
  (state: ApplicationState) => {
    return state;
  },
);

export const selectCurrentRelayChain = createSelector(selectApplicationState, (state: ApplicationState) => {
  return state.currentRelayChain;
});
