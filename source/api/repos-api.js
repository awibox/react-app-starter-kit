import axios from 'axios';
import store from '../store';
import { getReposSuccess} from '../actions/repos-actions';

export function getRepos() {
    console.log('getRepos сработал');
    return axios.get('https://api.github.com/users/BEM-builder/repos')
        .then(response => {
            console.log(response);
            store.dispatch(getReposSuccess(response.data));
            return response;
        });
}