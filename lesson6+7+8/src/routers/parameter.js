// Router
const R = require('express').Router();
const parameterController = require('../controllers/parameter')

R.get('/list-category-id',
  parameterController.getAllCategoryId);

R.get('/list-category-id',
  parameterController.getAllProductId);

R.get('/list-category-id',
  parameterController.getAllUserId);

R.get('/list-category-id',
  parameterController.getAllOrderId);

module.exports = R;



