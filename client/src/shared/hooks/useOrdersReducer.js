import {useReducer, useEffect} from "react";
import reducer from "../reducers/orders_reducer";
import {getOrders, getOrderDetails} from "../reducers/orders_reducer_actions";

const initialState = {
    loading: false,
    orders: [],
    order: {},
    error: null
}

const useOrdersReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const getOrderDetailsHandler = (id) => {
        dispatch(getOrderDetails(id));
    }

    useEffect(() => {
        getOrders(dispatch);
    }, []);

    return { ...state, getOrderDetailsHandler };
}

export default useOrdersReducer;