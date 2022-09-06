const mongoose = require('mongoose');
const { Schema } = mongoose;

const Product = new Schema(
    {
        name: { type: String, maxLength: 100, required: true },
        image: { type: String, required: true },
        description: { type: String, required: true },
        amount: { type: Number, required: true },
        options: {
            size: { type: String, maxLength: 30, required: true },
            color: { type: String, maxLength: 50, required: true },
        },
        price: { type: Number, required: true },
        discount: { type: Number, required: true },
        type: { type: String, maxLength: 70, required: true },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('Products', Product);
