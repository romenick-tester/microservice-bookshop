import {
    AUTH_LOGIN_REQUEST, 
    AUTH_LOGIN_SUCCESS, 
    AUTH_LOGIN_ERROR, 
    AUTH_SIGNUP_REQUEST,
    AUTH_SIGNUP_SUCCESS,
    AUTH_SIGNUP_ERROR,
} from "./auth_reducer_constants";

const url = "http://localhost:8000/api/customers";

const login = async (dispatch, formdata) => {
    dispatch({type: AUTH_LOGIN_REQUEST});

    try {
        const config = {
            method: "POST",
            body: JSON.stringify(formdata),
            headers: {
                "Content-Type": "application/json"
            }
        }

        const res = await fetch(`${url}/login`, config);
        const result = await res.json();

        if(!res.ok) throw new Error(result.message);

        dispatch({type: AUTH_LOGIN_SUCCESS, payload: result});
    } catch (err) {
        dispatch({type: AUTH_LOGIN_ERROR, payload: err.message});
    }
}

const signup = async (dispatch, formdata) => {
    dispatch({type: AUTH_SIGNUP_REQUEST});
    try {
        const config = {
            method: "POST",
            body: JSON.stringify(formdata),
            headers: {
                "Content-Type": "application/json"
            }
        }

        const res = await fetch(`${url}/signup`, config);
        const result = await res.json();

        if(!res.ok) throw new Error(result.message);

        dispatch({type: AUTH_SIGNUP_SUCCESS, payload: result});
    } catch (err) {
        dispatch({type: AUTH_SIGNUP_ERROR, payload: err.message})
    }
}

export {login, signup};