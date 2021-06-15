import { ApplicationState } from './application-state/ApplicationState.types';

export interface RootStore {
  readonly applicationState: ApplicationState;
}
