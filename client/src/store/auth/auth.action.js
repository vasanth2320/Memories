import * as api from "../../services/api/api.services";
import AUTH_ACTION_TYPES from "./auth.types";

export const signin = (formData, history) => async(dispatch) => {
    try {
        history.push('/');
    } catch (error) {
        console.log(error);
    };
};

export const signup = (formData, history) => async(dispatch) => {
    try {
        history.push('/');
    } catch (error) {
        console.log(error);
    };
};