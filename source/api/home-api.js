import axios from 'axios';
import store from '../store';
import { getHomeSuccess} from '../actions/home-actions';

export function getHome() {
    console.log('getHome сработал');
    return axios.get('https://api.github.com/repos/BEM-builder/react-app-starter-kit')
        .then(response => {
            console.log(response);
            store.dispatch(getHomeSuccess(response.data));
            return response;
        });
}