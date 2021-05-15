import {GET_BOOKLIST_REQUEST, GET_BOOKLIST_SUCCESS, GET_BOOKLIST_ERROR, GET_BOOK_DETAILS} from "./books_reducer_constants";

const url = "http://localhost:7000/api/books";

const getBooks = async (dispatch) => {
    dispatch({type: GET_BOOKLIST_REQUEST});

    try {
        const res = await fetch(url);
        const data = await res.json();

        if(!res.ok) throw new Error(data.message);

        dispatch({type: GET_BOOKLIST_SUCCESS, payload: data});
    } catch (err) {
        console.error(err.message);
        dispatch({type: GET_BOOKLIST_ERROR, payload: err.message});
    }
}

const getBookDetails = (id) => {
    return ({type: GET_BOOK_DETAILS, payload: id});
}

export {getBooks, getBookDetails};