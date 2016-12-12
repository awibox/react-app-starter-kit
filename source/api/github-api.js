import axios from 'axios';
import store from '../store';
import { getAuthorSuccess, getHomeSuccess, getHomeReleases, getReposSuccess} from '../actions/action-functions';

export function getAuthor() {
    console.log('getAuthor сработал');
    return axios.get('https://api.github.com/users/awibox')
        .then(response => {
            console.log("get",response);
            store.dispatch(getAuthorSuccess(response.data));
            return response;
        });
}
export function getHome() {
    console.log('getHome сработал');
    return axios.get('https://api.github.com/repos/BEM-builder/react-app-starter-kit')
        .then(response => {
            console.log(response);
            store.dispatch(getHomeSuccess(response.data));
            return response;
        });
}
export function getReleases() {
    console.log('getReleases сработал');
    return axios.get('https://api.github.com/repos/BEM-builder/react-app-starter-kit/releases')
        .then(response => {
            console.log(response);
            store.dispatch(getHomeReleases(response.data));
            return response;
        });
}
export function getRepos() {
    console.log('getRepos сработал');
    return axios.get('https://api.github.com/users/BEM-builder/repos')
        .then(response => {
            console.log(response);
            store.dispatch(getReposSuccess(response.data));
            return response;
        });
}