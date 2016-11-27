import * as types from '../actions/action-types';

export function getHomeSuccess(home) {
  return {
    type: types.GET_HOME_SUCCESS,
    home
  };
}
