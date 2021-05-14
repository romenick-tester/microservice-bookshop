import {useReducer, useEffect} from "react";
import reducer from "./customers_reducer";
import {getCustomers, getCustomerDetails} from "./customers_reducer_actions";

const initialState = {
    loading: false,
    customers: [],
    customer: {},
    error: null
}

const useCustomersReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const getCustomerDetailsHandler = (id) => {
        dispatch(getCustomerDetails(id));
    }

    useEffect(() => {
        getCustomers(dispatch);
    }, []);

    return { ...state, getCustomerDetailsHandler };
}

export default useCustomersReducer;