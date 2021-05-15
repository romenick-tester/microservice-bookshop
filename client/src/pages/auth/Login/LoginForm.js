import React from "react"
import styled from "styled-components"

const LoginForm = (props) => {
    
    return (
        <Wrapper>
            <div>
                <h1>login:</h1>
                {props.loading && <p id="alert" className="info">loading...</p>}
                {props.error && <p id="alert" className="danger">{props.error}</p>}
                {props.message.show && <p id="alert" className={props.message.type}>{props.message.msg}</p>}
                <form className="form" onSubmit={props.formSubmitHandler}>
                    <div className="form-group">
                        <label>Email</label>
                        <input 
                            type="text" 
                            value={props.email} 
                            onChange={(e) => props.setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input 
                            type="password"
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

    #alert.danger { color: orangered; text-transform: capitalize }
    #alert.success { color: green; text-transform: capitalize }
    #alert.info { color: lightblue; text-transform: capitalize }
`

export default LoginForm
