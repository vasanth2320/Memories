import POST_ACTION_TYPES from './post.types';

export const POSTS_INITIAL_STATE = {
    posts: []
};

export const postReducer = (posts = POSTS_INITIAL_STATE, action = {}) => {
    const { type, payload} = action;

    switch (type) {
        case POST_ACTION_TYPES.UPDATE:
        case POST_ACTION_TYPES.LIKE:
            return posts.map((post) => post._id === payload._id ? payload : post);
        case POST_ACTION_TYPES.FETCH_ALL:
            return payload;
        case POST_ACTION_TYPES.CREATE:
            return [ ...posts, payload];
        case POST_ACTION_TYPES.DELETE:
            return posts.filter((post) => post._id !== payload);
        default:
            return posts;
    };
};