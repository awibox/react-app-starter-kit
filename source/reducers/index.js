import { combineReducers } from 'redux';

// Reducers
import reposReducer from './repos-reducer';
import homeReducer from './home-reducer';
import authorReducer from './author-reducer';

// Combine Reducers
var reducers = combineReducers({
    homeState: homeReducer,
    authorState: authorReducer,
    reposState: reposReducer,
});

export default reducers;
