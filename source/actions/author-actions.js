import * as types from '../actions/action-types';

export function getAuthorSuccess(author) {
  return {
    type: types.GET_AUTHOR_SUCCESS,
    author
  };
}
