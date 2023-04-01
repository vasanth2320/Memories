import POST_ACTION_TYPES from "./post.types";

export const POST_INITIAL_STATE = {
  state: [],
};

export const postReducer = (state = POST_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case POST_ACTION_TYPES.SET_UPDATED_POST:
      return state.map((post) => (post._id === payload._id ? payload : post));
    case POST_ACTION_TYPES.SET_POST_ITEMS:
      return {
        ...state,
        posts: payload.data,
        currentPage: payload.currentPage,
        numberOfPages: payload.numberOfPages,
      };
    case POST_ACTION_TYPES.SET_POST_ITEMS_BY_SEARCH:
      return {
        ...state,
        posts: payload,
      };
    case POST_ACTION_TYPES.SET_NEW_POST:
      return [...state, payload];
    case POST_ACTION_TYPES.SET_DELETE_POST:
      return state.filter((post) => post._id !== payload);
    default:
      return state;
  }
};
