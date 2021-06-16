import * as ApplicationStateAction from './ApplicationStateAction';
import { ApplicationState } from './ApplicationState.types';
import { RelayChain } from '../../models/Chain';
import Action from '../models/Action.types';
import baseReducer from '../utilities/BaseReducer';

const initialState: ApplicationState = {
  currentRelayChain: { name: '', unit: '', mainColor: '' },
};

export default baseReducer(initialState, {
  [ApplicationStateAction.SELECT_RELAY_CHAIN]: (
    state: ApplicationState,
    action: Action<RelayChain>,
  ): ApplicationState => {
    return {
      currentRelayChain: action.payload ?? state.currentRelayChain,
      ...state,
    };
  },
});
