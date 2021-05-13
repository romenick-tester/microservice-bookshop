const express = require("express");
require("dotenv").config();
const connectDB = require("./customers_db");
const controller = require("./customers_controllers");

connectDB();
const app = express();
app.use(express.json());


app.get("/api/customers", controller.getCustomers);
app.post("/api/customers", controller.createCustomer);
app.delete("/api/customers", controller.deleteCustomer);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Listening on ${PORT}.`));