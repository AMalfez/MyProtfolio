const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

const User = mongoose.model('USER', schema);
module.exports = User;