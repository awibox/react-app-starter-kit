import * as types from '../actions/action-types';

export function getUserInfoSuccess(user) {
    return {
        type: types.GET_USER_INFO_SUCCESS,
        user
    };
}