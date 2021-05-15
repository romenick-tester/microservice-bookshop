import {
    AUTH_LOGIN_REQUEST,
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGIN_ERROR,
    AUTH_SIGNUP_REQUEST,
    AUTH_SIGNUP_SUCCESS,
    AUTH_SIGNUP_ERROR,
} from "./auth_reducer_constants";

const auth = (state, action) => {
    const {type, payload} = action;

    switch(type) {
        
        case AUTH_LOGIN_REQUEST:
            return { ...state, loading: true };
            
        case AUTH_LOGIN_SUCCESS:
            return { ...state, loading: false, authenticated: true, credentials: {...payload} };

        case AUTH_LOGIN_ERROR:
            return { ...state, loading: false, authenticated: false, error: payload };

        case AUTH_SIGNUP_REQUEST:
            return { ...state, loading: true };
            
        case AUTH_SIGNUP_SUCCESS:
            return { ...state, loading: false, authenticated: true, credentials: {...payload} };

        case AUTH_SIGNUP_ERROR:
            return { ...state, loading: false, authenticated: false, error: payload };

        default:
            return state;
    }
}

export default auth;