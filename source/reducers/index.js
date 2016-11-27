import { combineReducers } from 'redux';

// Reducers
import reposReducer from './repos-reducer';
import homeReducer from './home-reducer';

// Combine Reducers
var reducers = combineReducers({
    homeState: homeReducer,
    reposState: reposReducer,
});

export default reducers;
