import React from "react"
import styled from "styled-components"

import {useAuthContext} from "../../../shared/contexts/authContext";

const Profile = () => {
    const data = useAuthContext()
    console.log(data);
    return (
        <Wrapper>
            <div>
                <h1>customers profile page</h1>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    display: grid;
    place-items: center;
`

export default Profile
