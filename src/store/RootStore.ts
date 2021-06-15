import { createStore, Store } from 'redux';
import { RootStore } from './PolkAuctionStore';
import { rootReducer } from './RootReducer';
import { devToolsEnhancer } from 'redux-devtools-extension';

export const rootStore = (initialState: Partial<RootStore>): Store<RootStore> => {
  return createStore(rootReducer, initialState as any, devToolsEnhancer({}));
};
