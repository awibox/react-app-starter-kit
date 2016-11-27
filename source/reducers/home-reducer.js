import * as types from '../actions/action-types';

const initialState = {
  home: []
};

const homeReducer = function(state = initialState, action) {

  switch(action.type) {

    case types.GET_HOME_SUCCESS:
      return Object.assign({}, state, { home: action.home });

  }

  return state;

};

export default homeReducer;
