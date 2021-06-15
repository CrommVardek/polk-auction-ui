import IAction from '../models/Action.types';

export const createAction = <T = undefined>(type: string, payload?: T, error = false, meta: any = null): IAction<T> => {
  return { type, payload, error, meta };
};
