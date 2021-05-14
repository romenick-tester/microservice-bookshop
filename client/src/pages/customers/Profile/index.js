import React from "react";
import useCustomersReducer from "../../../shared/contexts/customers";

const Profile = () => {
    const {loading, error, customers} = useCustomersReducer();

    if(loading) {
        return <h1>loading...</h1>
    }

    if(error) {
        return <h1>{error}</h1>
    }

    if(customers) {
        console.log(customers);
    }

    return (
        <div>
            <h1>customer profile page</h1>
        </div>
    );
}

export default Profile;
