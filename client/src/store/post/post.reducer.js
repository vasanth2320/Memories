import POST_ACTION_TYPES from "./post.types";

export const POSTS_INITIAL_STATE = {
  posts: [],
};

export const postReducer = (posts = POSTS_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case POST_ACTION_TYPES.SET_UPDATED_POST:
      return posts.map((post) => (post._id === payload._id ? payload : post));
    case POST_ACTION_TYPES.SET_POST_ITEMS:
      return payload;
    case POST_ACTION_TYPES.SET_NEW_POST:
      return [...posts, payload];
    case POST_ACTION_TYPES.SET_DELETE_POST:
      return posts.filter((post) => post._id !== payload);
    default:
      return posts;
  }
};
