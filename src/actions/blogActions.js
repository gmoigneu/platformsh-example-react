import * as types from './actionTypes';
import postApi from '../api/mockPostApi';

export function loadPostsSuccess(posts) {
  return { type: types.LOAD_POSTS_SUCCESS, posts};
}

export function loadPosts() {
  return function(dispatch) {
    return postApi.getAllPosts().then(posts => {
      dispatch(loadPostsSuccess(posts));
    }).catch(error => {
      throw(error);
    });
  };
}
