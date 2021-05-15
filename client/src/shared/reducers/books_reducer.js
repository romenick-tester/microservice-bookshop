import { GET_BOOKLIST_REQUEST, GET_BOOKLIST_SUCCESS, GET_BOOKLIST_ERROR, GET_BOOK_DETAILS } from "./books_reducer_constants";

const books = (state, action) => {
    const {type, payload} = action;

    switch(type) {
        case GET_BOOKLIST_REQUEST:
            return { ...state, loading: true };

        case GET_BOOKLIST_SUCCESS:
            return { ...state, loading: false, books: payload };

        case GET_BOOK_DETAILS:
            const tempBook = state.books.filter((b) => b._id === payload);

            return { ...state, loading: false, book: tempBook };

        case GET_BOOKLIST_ERROR:
            return { ...state, loading: false, error: payload };

        default:
            return state;
    }
}

export default books;