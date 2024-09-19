const express = require("express")
const router = express.Router();
const userController = require('../userController/controller');


router.post('/submit',userController.AddBook);
router.get('/submit',userController.GetBook);
router.get('/submit/:id',userController.GetSingleBoook);
router.put('/update/:id',userController.UpdateBook);
router.delete('/delete/:id',userController.DeleteBook);

module.exports = router