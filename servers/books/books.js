const express = require("express");
require("dotenv").config();
const connectDB = require("./books_db");
const controller = require("./books_controllers");

connectDB();
const app = express();
app.use(express.json());

app.get("/api/books", controller.getBooks);
app.post("/api/books", controller.createBook);
app.delete("/api/books", controller.deleteBook);

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => console.log(`Listening on ${PORT}.`));