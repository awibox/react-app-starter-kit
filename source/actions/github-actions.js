import * as types from '../actions/action-types';

export function getUserInfoSuccess(github) {
    return {
        type: types.GET_USER_INFO_SUCCESS,
        github
    };
}