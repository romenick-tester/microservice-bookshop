const express = require("express");
require("dotenv").config();
const connectDB = require("./orders_db");
const controller = require("./orders_controllers");

connectDB();
const app = express();
app.use(express.json());


app.get("/api/orders", controller.getOrders);
app.post("/api/orders", controller.createOrder);

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`Listening on ${PORT}.`));