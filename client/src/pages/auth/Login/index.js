import React, {useState} from "react";
import Form from "./Form";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const formSubmitHandler = (e) => {
        e.preventDefault();
        console.log({email, password});
    }

    return (
        <Form 
            email={email}
            password={password}
            setEmail={setEmail}
            setPassword={setPassword}
            formSubmitHandler={formSubmitHandler} 
        />
    )
}

export default Login;
