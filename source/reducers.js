import * as types from './actions/action-types';

// Reducers
const initialState = {
    repos: [],
    home: [],
    releases: [],
    author: []
};

const Reducers = function(state = initialState, action) {

    switch(action.type) {

        case types.GET_HOME_SUCCESS:
            return Object.assign({}, state, { home: action.home });
        case types.GET_HOME_RELEASES:
            return Object.assign({}, state, { releases: action.releases });
        case types.GET_AUTHOR_SUCCESS:
            return Object.assign({}, state, { author: action.author });
        case types.GET_REPOS_SUCCESS:
            return Object.assign({}, state, { repos: action.repos });
    }

    return state;

};

export default Reducers;