const express = require("express");
require("dotenv").config();
const connectDB = require("./customers_db");
const controller = require("./customers_controllers");
const setHeaders  = require("./assets/setHeaders");

connectDB();
const app = express();
app.use(express.json());
app.use(setHeaders);

app.post("/api/customers/login", controller.loginCustomer);
app.post("/api/customers/signup", controller.signupCustomer);
app.get("/api/customers", controller.getCustomers);
app.delete("/api/customers", controller.deleteCustomer);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Listening on ${PORT}.`));