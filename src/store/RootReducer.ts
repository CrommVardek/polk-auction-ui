import { combineReducers, Reducer, ReducersMapObject } from 'redux';
import { RootStore } from './PolkAuctionStore';
import applicationStateReducer from './application-state/ApplicationStateReducer';

export const rootReducer = (): Reducer<RootStore> => {
  const reducerMap: ReducersMapObject<RootStore> = {
    applicationState: applicationStateReducer,
  };
  return combineReducers(reducerMap);
};
