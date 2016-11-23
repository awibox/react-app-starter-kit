import axios from 'axios';
import store from '../store';

export function getUserInfo() {
    return axios.get('http://localhost:3001/users')
        .then(response => {

        });
}