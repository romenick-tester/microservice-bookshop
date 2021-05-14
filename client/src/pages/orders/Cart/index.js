import React from "react";

import useOrdersReducer from "../../../shared/contexts/orders";

const Cart = () => {
    const {loading, error, orders} = useOrdersReducer();

    if(loading) {
        return <h1>loading...</h1>
    }

    if(error) {
        return <h1>{error}</h1>
    }

    if(orders) {
        console.log(orders);
    }

    return (
        <div>
            <h1>cart page</h1>
        </div>
    );
}

export default Cart;
