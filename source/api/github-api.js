import axios from 'axios';
import store from '../store';
import { getUserInfoSuccess } from '../actions/github-actions';

export function getUserInfo() {
    return axios.get('https://api.github.com/users/')
        .then(response => {
            store.dispatch(getUserInfoSuccess(response.data));
            return response;
        });
}