import * as api from "../../services/api/api.services";
import POST_ACTION_TYPES from "./post.types";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    dispatch({ type: POST_ACTION_TYPES.SET_POST_ITEMS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: POST_ACTION_TYPES.SET_NEW_POST, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: POST_ACTION_TYPES.SET_UPDATED_POST, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);

    dispatch({ type: POST_ACTION_TYPES.SET_DELETE_POST, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);

    dispatch({ type: POST_ACTION_TYPES.SET_UPDATED_POST, payload: data });
  } catch (error) {
    console.log(error);
  }
};
