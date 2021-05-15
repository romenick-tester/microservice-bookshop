import {useReducer} from "react"
import reducer from "../reducers/customers_reducer"
import {getCustomers, getCustomerDetails} from "../reducers/customers_reducer_actions"

const initialState = {
    loading: false,
    list: [],
    details: {},
    error: null
}

const useCustomersReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const getCustomerDetailsHandler = (id) => {
        dispatch(getCustomerDetails(id))
    }

    const getCustomersHandler = () => {
        getCustomers(dispatch)
    }

    return { ...state, getCustomersHandler, getCustomerDetailsHandler }
}

export default useCustomersReducer