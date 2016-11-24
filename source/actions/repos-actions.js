import * as types from '../actions/action-types';

export function getReposSuccess(repos) {
  return {
    type: types.GET_REPOS_SUCCESS,
    repos
  };
}
