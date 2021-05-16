import React from "react";
import styled from "styled-components";

const Form = (props) => {
    const dev = false;

    return (
        <Wrapper>
            <div>
                <h1>register:</h1>
                {props.message.show && <p id="alert" className={props.message.type}>{props.message.msg}</p>}
                <form className="form" onSubmit={props.formSubmitHandler}>
                    <div className="form-group">
                        <label>Name</label>
                        <input 
                            type="text" 
                            name="name" 
                            value={props.name} 
                            onChange={(e) => props.setName(e.target.value)}
                        />
                    </div>
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
                            value={props.password1} 
                            onChange={(e) => props.setPassword1(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input 
                            type={dev ? "text" : "password"}
                            name="password" 
                            value={props.password2} 
                            onChange={(e) => props.setPassword2(e.target.value)}
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

    #alert.danger { color: orangered }
    #alert.success { color: green }
`

export default Form;
