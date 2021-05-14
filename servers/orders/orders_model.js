const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    customerID: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    },
    bookID: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    },
    orderedAt: {
        type: Date,
        required: true
    },
    deliveredAt: {
        type: Date,
        required: true
    }
})

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;