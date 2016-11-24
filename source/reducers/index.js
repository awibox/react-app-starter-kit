import { combineReducers } from 'redux';

// Reducers
import reposReducer from './repos-reducer';

// Combine Reducers
var reducers = combineReducers({
    reposState: reposReducer,
});

export default reducers;
