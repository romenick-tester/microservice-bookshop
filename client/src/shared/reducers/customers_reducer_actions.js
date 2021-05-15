import {
    GET_CUSTOMERS_LIST_REQUEST, 
    GET_CUSTOMERS_LIST_SUCCESS, 
    GET_CUSTOMERS_LIST_ERROR, 
    GET_CUSTOMER_DETAILS
} from "./customers_reducer_constants";

const url = "http://localhost:8000/api/customers";

const getCustomers = async (dispatch) => {
    try {
        dispatch({type: GET_CUSTOMERS_LIST_REQUEST})

        const res = await fetch(url);
        const result = await res.json();

        if(!res.ok) throw new Error(result.message);

        dispatch({type: GET_CUSTOMERS_LIST_SUCCESS, payload: result})
    } catch (err) {
        console.error(err.message);
        dispatch({type: GET_CUSTOMERS_LIST_ERROR, payload: err})
    }
}

const getCustomerDetails = (id) => {
    return ({type: GET_CUSTOMER_DETAILS, payload: id});
}

export {getCustomers, getCustomerDetails};