const express = require("express")
const router = express.Router();
const userController = require('../userController/controller');


router.post('/submit',userController.AddBook);
router.get('/submit',userController.GetBook);
router.put('/submit/:id',userController.GetSingleBoook);


module.exports = router