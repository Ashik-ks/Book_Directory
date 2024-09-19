let users =  require('../db/model/model');
const {success_function,error_function} = require('../utils/responsehandler');

exports.AddBook = async function (req,res){
    try {
         let body = req.body;
         console.log("body : ",body);

         let Add_Book = await users.create(body);
         console.log("Add_Book : ",Add_Book)
        
         let response = {
            success : true,
            statuscode : 200,
            message : "Book added succesfully",
        }
        res.status(response.statuscode).send(response);

    } catch (error) {
        let response = {
            success : false,
            statuscode : 400,
            message : "Book not added",
        }
        res.status(response.statuscode).send(response);
    }
}
exports.GetBook = async function (req,res){
    try {
        let userData = await users.find();
        console.log("userData : ",userData);
        
         let response = {
            success : true,
            statuscode : 200,
            message : userData,
        }
        res.status(response.statuscode).send(response);

    } catch (error) {
        let response = {
            success : false,
            statuscode : 400,
            message : "Book not added",
        }
        res.status(response.statuscode).send(response);
    }
}

exports.GetSingleBoook = async function (req,res){
    try {
        let id = req.params.id;
        console.log("id : ",id);

        let user_data = await users.findOne({ _id : id});
            console.log("user_data7 : ",user_data);

            let str_user_data = JSON.stringify(user_data);
            console.log("str_user_data : ",str_user_data);

            let response = {
                success : true,
                statuscode : 200,
                message : str_user_data,
            }
            res.status(response.statuscode).send(response);
    } catch (error) {
        let response = {
            success : false,
            statuscode : 400,
            message : "Book not added",
        }
        res.status(response.statuscode).send(response);
    }
}
