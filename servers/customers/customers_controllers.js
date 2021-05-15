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

        const response = [...customers].map((cust) => {
            return {
                id: cust._id,
                name: cust.name, 
                address: cust.address,
                dob: [
                    cust.dob.month,
                    cust.dob.day,
                    cust.dob.year,
                    `${cust.dob.month} ${cust.dob.day} ${cust.dob.year}`,
                ],
                email: cust.credentials.email 
            }
        })

        res.status(200).json(response);
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({ message: err.message });
    }
}

const signupCustomer = async (req, res) => {
    try {
        let customer = await Customer.findOne({"credentials.email": req.body.email});

        if(customer) {
            res.status(401)
            throw new Error("Email already exist!")
        }

        customer = new Customer({
            name: req.body.name,
            dob: {year: 1900, month: "January", day: 10},
            address: "address here",
            credentials: {
                email: req.body.email,
                password: req.body.password
            }
        });

        const newCustomer = await customer.save();

        const response = {
            id: newCustomer._id,
            name: newCustomer.name,
            email: newCustomer.credentials.email,
            token: process.env.SECRET_PASS
        }

        res.status(201).json(response);
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

        const response = {
            id: customer._id,
            name: customer.name,
            email: customer.credentials.email,
            token: process.env.SECRET_PASS
        }

        res.status(200).json(response);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: err.message })
    }
}

module.exports = { getCustomers, signupCustomer, deleteCustomer, loginCustomer };