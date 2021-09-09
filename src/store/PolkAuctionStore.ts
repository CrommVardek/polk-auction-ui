import { Store } from 'pullstate';
import { ApplicationState } from './application-state/ApplicationState.types';

const initialPolkAuctionStoreState: ApplicationState = {
  currentRelayChain: {
    name: '',
    unit: '',
    mainColor: '',
  },
};

export const PolkAuctionStore = new Store(initialPolkAuctionStoreState);
