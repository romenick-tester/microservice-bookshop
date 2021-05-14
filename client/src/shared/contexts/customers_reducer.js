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
            return { ...state, loading: false, customers: payload };

        case GET_CUSTOMER_DETAILS:
            const tempCustomer = state.customers.filter((c) => c._id === payload);
            return { ...state, loading: false, customer: tempCustomer };

        case GET_CUSTOMERS_LIST_ERROR:
            return { ...state, loading: false, error: payload };

        default:
            return state;
    }
}

export default customers;