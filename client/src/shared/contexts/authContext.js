import React, {useContext, createContext, useReducer} from "react"
import reducer from "../reducers/auth_reducer";
import {login, signup} from "../reducers/auth_reducer_actions";

const AuthContext = createContext()

const initialState = {
    loading: false,
    authenticated: false,
    credentials: {},
    error: null
}

const AuthProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const loginHandler = (formdata) => {
        login(dispatch, formdata)
    }

    const signupHandler = (formdata) => {
        signup(dispatch, formdata)
    }
    
    return (
        <AuthContext.Provider value={{...state, loginHandler, signupHandler}}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuthContext = () => {
    return useContext(AuthContext)
}

export {AuthProvider, useAuthContext}