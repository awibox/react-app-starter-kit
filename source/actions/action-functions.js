import * as types from '../actions/action-types';

export function getAuthorSuccess(author) {
  return {
    type: types.GET_AUTHOR_SUCCESS,
    author
  };
}
export function getHomeSuccess(home) {
    return {
        type: types.GET_HOME_SUCCESS,
        home
    };
}
export function getHomeReleases(releases) {
    return {
        type: types.GET_HOME_RELEASES,
        releases
    };
}
export function getReposSuccess(repos) {
    return {
        type: types.GET_REPOS_SUCCESS,
        repos
    };
}
