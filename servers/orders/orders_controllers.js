const mongoose = require("mongoose");
const Order = require("./orders_model");

const getOrders = async (req, res) => {
    try {
        const orders = await Order.find();

        if(orders.length === 0) {
            res.status(404)
            throw new Error("No orders found!");
        }

        res.status(200).json(orders);
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({ message: err.message });
    }
}

const createOrder = async (req, res) => {
    try {
        const newOrder = new Order({
            ...req.body,
            customerID: mongoose.Types.ObjectId(req.body.customerID),
            bookID: mongoose.Types.ObjectId(req.body.bookID)
        });

        await newOrder.save();

        res.status(201).json({ message: "New order has been added!" });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: err.message })
    }
}

module.exports = { getOrders, createOrder };