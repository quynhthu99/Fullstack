const R = require('express').Router();
const userController = require('../controllers/user')

R.get('/', userController.getAllUser)
R.get('/:id', userController.getUserById)
R.post('/', userController.createUser)
R.put('/:id', userController.updateUser)
R.delete('/:id', userController.deleteUser)


module.exports = R