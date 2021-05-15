import {
    GET_ORDERS_REQUEST, 
    GET_ORDERS_SUCCESS, 
    GET_ORDERS_ERROR, 
    GET_ORDER_DETAILS 
} from "./orders_reducer_constants";

const orders = (state, action) => {
    const {type, payload} = action;

    switch(type) {
        case GET_ORDERS_REQUEST:
            return { ...state, loading: true };

        case GET_ORDERS_SUCCESS:
            return { ...state, loading: false, orders: payload };

        case GET_ORDER_DETAILS:
            const tempOrder = state.orders.filter((o) => o._id === payload);
            return { ...state, loading: false, order: tempOrder };

        case GET_ORDERS_ERROR:
            return { ...state, loading: false, error: payload };

        default:
            return state;
    }
}

export default orders;