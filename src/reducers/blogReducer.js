import * as types from '../actions/actionTypes';

const initialState =
  {
    pagination: {

    },
    items: []
  }
;

export default function blogReducer(state = initialState, action) {
  switch(action.type) {
    case types.LOAD_POSTS_SUCCESS:
      return action.posts;

    default:
      return state;
  }
}
