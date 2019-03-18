const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,  
    },
    price: {
        type: Number,
        required: true,     
    },
    img: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    size: {
        type: String,
        required: true,  
    },
});

ProductSchema.plugin(mongoosePaginate);

mongoose.model('product', ProductSchema);