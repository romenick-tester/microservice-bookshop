const Book = require("./books_model");
const data = require("./books_default_data");

const getBooks = async (req, res) => {
    try {
        const books = await Book.find({});

        if(books.length === 0) {
            return res.json(data);
        }

        res.status(200).json(books);
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({message: err.message})
    }
};

const createBook = async (req, res) => {
    try {
        const newBook = new Book({...req.body});

        await newBook.save();

        res.status(201).json({ message: "New book added!" });
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({message: err.message});
    }
};

const deleteBook = async (req, res) => {
    try {
        await Book.findByIdAndDelete(req.query.bookId);

        res.status(200).json({ message: "Book deleted!" });
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({message: err.message});
    }
};

module.exports = { getBooks, createBook, deleteBook };