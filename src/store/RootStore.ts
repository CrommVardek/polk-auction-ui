import { createStore, Store } from 'redux';
import { RootStore } from './PolkAuctionStore';
import { rootReducer } from './RootReducer';
import { devToolsEnhancer } from 'redux-devtools-extension';

export const rootStore = (): Store<RootStore> => {
  return createStore(rootReducer(), devToolsEnhancer({}));
};
