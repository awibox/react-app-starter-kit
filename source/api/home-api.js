import axios from 'axios';
import store from '../store';
import { getHomeSuccess} from '../actions/home-actions';

export function getHome() {
    console.log('getHome сработал');
    return axios.get('https://api.github.com/users/BEM-builder')
        .then(response => {
            console.log(response);
            store.dispatch(getHomeSuccess(response.data));
            return response;
        });
}