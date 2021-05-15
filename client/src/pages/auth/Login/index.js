import React, {useState,useEffect} from "react"

import {useAuthContext} from "../../../shared/contexts/authContext"
import Form from "./LoginForm"

const Login = ({history}) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState({show: false, msg: "", type: ""})

    const { loading, authenticated, error, loginHandler } = useAuthContext()

    useEffect(() => {
        if(authenticated) {
            history.push(`/customers/profile`)
        }
    }, [authenticated, history])

    const formSubmitHandler = (e) => {
        e.preventDefault()
        loginHandler({email, password})
    }
    
    return (
        <Form 
            email={email}
            password={password}
            message={message}
            loading={loading}
            error={error}
            setEmail={setEmail}
            setPassword={setPassword}
            formSubmitHandler={formSubmitHandler}
            setMessage={setMessage}
        />
    )
}

export default Login
