import {
    GET_CUSTOMERS_LIST_REQUEST, 
    GET_CUSTOMERS_LIST_SUCCESS, 
    GET_CUSTOMERS_LIST_ERROR, 
    GET_CUSTOMER_DETAILS 
} from "./customers_reducer_constants";

const customers = (state, action) => {
    const {type, payload} = action;

    switch(type) {
        case GET_CUSTOMERS_LIST_REQUEST:
            return { ...state, loading: true };

        case GET_CUSTOMERS_LIST_SUCCESS:
            return { ...state, loading: false, list: payload };

        case GET_CUSTOMER_DETAILS:
            const tempCustomer = state.list.find((c) => c.id === payload);
            return { ...state, details: tempCustomer };

        case GET_CUSTOMERS_LIST_ERROR:
            return { ...state, loading: false, error: payload };

        default:
            return state;
    }
}

export default customers;