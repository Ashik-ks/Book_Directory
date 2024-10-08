const mongoose = require('mongoose')

let Books = new mongoose.Schema({
    name: {
        type :String,
        // required : true,
    },
    publisher: {
        type :String,
        // required : true,
    },
    author: {
        type :String,
        // required : true,
    },
    description: {
        type :String,
        // required : true,
    },
    price: {
        type :String,
        // required : true,
    },
    offer: {
        type :String,
        // required : true,
    },
    image: {
        type : String,
        // required : true,
    },
    category: {
        type : String,
        // required : true,
    },
    
})

let Book = mongoose.model('Books',Books)
module.exports = Book;