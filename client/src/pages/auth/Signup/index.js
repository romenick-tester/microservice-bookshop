import React, {useState} from "react";
import Form from "./Form";

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");
    const [message, setMessage] = useState({show: false, msg: "", type: ""});

    const formSubmitHandler = (e) => {
        e.preventDefault();
        if(password1 !== password2) {
            setMessage({show: true, msg: "Password doesn't match!", type: "danger"})
        } else {
            setMessage({show: true, msg: "Success!", type: "success"})
            console.log({name, email, password1});
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

export default Signup;
