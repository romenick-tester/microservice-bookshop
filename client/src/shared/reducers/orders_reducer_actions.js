import {
    GET_ORDERS_REQUEST, 
    GET_ORDERS_SUCCESS, 
    GET_ORDERS_ERROR, 
    GET_ORDER_DETAILS
} from "./orders_reducer_constants";

const url = "http://localhost:9000/api/orders";

const getOrders = async (dispatch) => {
    dispatch({type: GET_ORDERS_REQUEST});

    try {
        const res = await fetch(url);
        const data = await res.json();

        if(!res.ok) throw new Error(data.message);

        dispatch({type: GET_ORDERS_SUCCESS, payload: data});
    } catch (err) {
        console.error(err.message);
        dispatch({type: GET_ORDERS_ERROR, payload: err.message});
    }
}

const getOrderDetails = (id) => {
    return ({type: GET_ORDER_DETAILS, payload: id});
}

export {getOrders, getOrderDetails};