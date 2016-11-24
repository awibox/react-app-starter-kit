import { combineReducers } from 'redux';

// Reducers
import githubReducer from './github-reducer';

// Combine Reducers
var reducers = combineReducers({
    githubState: githubReducer
});

export default reducers;