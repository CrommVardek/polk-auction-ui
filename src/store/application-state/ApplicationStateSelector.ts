import { ApplicationState } from './ApplicationState.types';

export const selectRelayChain = (state: ApplicationState) => state.currentRelayChain;
