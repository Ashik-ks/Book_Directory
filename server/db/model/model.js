const mongoose = require('mongoose')

let Books = new mongoose.Schema({
    name: {
        type :String,
        require : true,
    },
    publisher: {
        type :String,
        require : true,
    },
    Author: {
        type :String,
        require : true,
    },
    description: {
        type :String,
        require : true,
    },
    price: {
        type :Number,
        require : true,
    },
    release_date: {
        type :Number,
        require : true,
    },
    image: {
        type : String,
        require : true,
    },
    
})

let Book = mongoose.model('Books',Books)
module.exports = Book;