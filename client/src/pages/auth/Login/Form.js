import React from "react";
import styled from "styled-components";

const Form = (props) => {
    const dev = false;

    return (
        <Wrapper>
            <div>
                <h1>login:</h1>
                <form className="form" onSubmit={props.formSubmitHandler}>
                    <div className="form-group">
                        <label>Email</label>
                        <input 
                            type="text" 
                            name="email" 
                            value={props.email} 
                            onChange={(e) => props.setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input 
                            type={dev ? "text" : "password"}
                            name="password" 
                            value={props.password} 
                            onChange={(e) => props.setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit">login</button>
                </form>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: grid;
    place-items: center;

    .form {
        display: flex;
        flex-direction: column;

        .form-group { display: flex; flex-direction: column }

        .form-group label { font-weight: 700 }
        
        .form-group input { padding-left: 0.2rem }

        .form-group :is(label, input), button { line-height: 2rem; margin-bottom: 0.3rem }

        button:hover { cursor: pointer }
    }
`

export default Form;
