const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date_of_birth: {
        year: { type: Number, required: true },
        month: { type: String, required: true },
        day: { type: Number, required: true }
    },
    address: {
        type: String,
        required: true
    }
})

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;