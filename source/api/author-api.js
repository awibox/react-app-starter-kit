import axios from 'axios';
import store from '../store';
import { getAuthorSuccess} from '../actions/action-functions';

export function getAuthor() {
    console.log('getAuthor сработал');
    return axios.get('https://api.github.com/users/awibox')
        .then(response => {
            console.log("get",response);
            store.dispatch(getAuthorSuccess(response.data));
            return response;
        });
}