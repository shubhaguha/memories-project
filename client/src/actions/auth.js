import { AUTH } from '../constants/actionTypes';
import * as api from '../api';

// Action Creators
export const signin = (formData, history) => async (dispatch) => {
    try {
        // TODO: Create backend

        history.push('/');
    } catch (error) {
        console.log(error);
    }
};

export const signup = (formData, history) => async (dispatch) => {
    try {
        // TODO: Create backend

        history.push('/');
    } catch (error) {
        console.log(error);
    }
};
