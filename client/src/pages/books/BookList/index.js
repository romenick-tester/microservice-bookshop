import React from "react"
import useBooksReducer from "../../../shared/hooks/useBooksReducer"

const BookList = () => {
    const { loading, error, books } = useBooksReducer()

    if(loading) {
        return <h1>loading...</h1>
    }

    if(error) {
        return <h1>{error}</h1>
    }

    console.log(books)

    return (
        <div>
            <h1>booklist page</h1>
        </div>
    )
}

export default BookList
