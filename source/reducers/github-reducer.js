import * as types from '../actions/action-types';

const initialState = {
  github: []
};

const githubReducer = function(state = initialState, action) {

  switch(action.type) {

    case types.GET_USER_INFO_SUCCESS:
      return Object.assign({}, state, { github: action.github });

  }

  return state;

};

export default githubReducer;