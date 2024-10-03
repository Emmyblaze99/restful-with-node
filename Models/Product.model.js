import mongoose, { Schema } from "mongoose";

const ProductSchema = new Schema ({
    title: {
        type: String,
        required: true,
    },   
    
    price: {
        type: Number,
        required: true,
    },

    date: {
        type: Date,
        default: Date.now,
    },

    brand: {
        type: String,
        required: true,
    },

    color: {
        type: String,
        required: true,
    },
    
    available: {
        type: Boolean,
        required: true,
        default: false,
    },
    
})

export const Product = mongoose.model('product', ProductSchema)