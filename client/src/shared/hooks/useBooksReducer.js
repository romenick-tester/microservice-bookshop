import {useReducer, useEffect} from "react";
import reducer from "../reducers/books_reducer";
import {getBooks, getBookDetails} from "../reducers/books_reducer_actions";

const initialState = {
    loading: false,
    books: [],
    book: {},
    error: null
}

const useBooksReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const getBookDetailsHandler = (id) => {
        dispatch(getBookDetails(id))
    }

    useEffect(() => {
        getBooks(dispatch)
    }, []);

    return { ...state, getBookDetailsHandler };
}

export default useBooksReducer;