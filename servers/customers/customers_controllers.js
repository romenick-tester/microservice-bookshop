const Customer = require("./customers_model");
const data = require("./customers_default_data");
//const { randomBytes } = require("crypto");
require("dotenv").config();

const getCustomers = async (req, res) => {
    try {
        const customers = await Customer.find({});

        if(customers.length === 0) {
            return res.status(200).json(data);
        }

        res.status(200).json(customers);
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({ message: err.message });
    }
}

const createCustomer = async (req, res) => {
    try {
        const newCustomer = new Customer({...req.body});

        await newCustomer.save();

        res.status(201).json({ message: "New customer has been added!" });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: err.message })
    }
}

const deleteCustomer = async (req, res) => {
    try {
        await Customer.findByIdAndDelete(req.query.customerId);

        res.status(200).json({ message: "Customer deleted!" });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: err.message })
    }
}

const loginCustomer = async (req, res) => {
    try {
        const customer = await Customer.findOne({"credentials.email": req.body.email});

        if(customer.credentials.password !== req.body.password) {
            return res.status(401).json({message: "Invalid credentials!"})
        }

        const token = process.env.SECRET_PASS;

        res.status(200).json(token);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: err.message })
    }
}

module.exports = { getCustomers, createCustomer, deleteCustomer, loginCustomer };