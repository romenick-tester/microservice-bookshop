import React, {useEffect, useState} from "react"
import Form from "./SignupForm"

import {useAuthContext} from "../../../shared/contexts/authContext"

const Signup = ({history}) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password1, setPassword1] = useState("")
    const [password2, setPassword2] = useState("")
    const [message, setMessage] = useState({show: false, msg: "", type: ""})

    const {authenticated, signupHandler} = useAuthContext()

    useEffect(() => {
        if(authenticated) {
            history.push("/customer/profile")
        }
    }, [authenticated, history]);

    const formSubmitHandler = (e) => {
        e.preventDefault();
        if(password1 !== password2) {
            setMessage({show: true, msg: "Password doesn't match!", type: "danger"})
        } else {
            signupHandler({name, email, password:password1})
        }
    }

    return (
        <Form 
            name={name}
            email={email}
            password1={password1}
            password2={password2}
            message={message}
            setName={setName}
            setEmail={setEmail}
            setPassword1={setPassword1}
            setPassword2={setPassword2}
            formSubmitHandler={formSubmitHandler} 
        />
    )
}

export default Signup
