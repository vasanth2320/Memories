import AUTH_ACTION_TYPES from "./auth.types";

export const AUTH_INITIAL_STATE = {
  auth: [],
};

export const authReducer = (state = AUTH_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case AUTH_ACTION_TYPES.AUTH:
        return 
    case AUTH_ACTION_TYPES.LOGOUT:
        return
    default:
      return state;
  }
};
