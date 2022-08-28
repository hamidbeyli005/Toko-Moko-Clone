const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        product_id: {
            type: String,
            unique: true,
            trim: true,
            required: true,
        },
        title: {
            type: String,
            trim: true,
            required: true,
        },
        price: {
            type: Number,
            trim: true,
            required: true,
        },
        discount: {
            type: Number,
            default:0
        },
        description: {
            type: String,
            required: true,
        },
        size: {
            type: Number,
            required: true,
        },
        sizeMore: {
            type: String,
            required: true,
        },

        category: {
            type: String,
            required: true,
        },

        gender: {
            type: String,
            required: true,
        },
        box: {
            type: Number,
            required: true,
        },
        
        checked: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true, //important
    }
);

module.exports = mongoose.model("Products", productSchema);
