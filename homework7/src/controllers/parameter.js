// Controller
const categoryService = require('../services/category')
const productService = require('../services/product')
const userService = require('../services/user')
const orderService = require('../services/order')

const getAllCategoryId = async (req, res) => {
  console.log(req.pagination);
  const { data, metadata }
    = await categoryService.getAllCategoryId() 
  res.send({
    status: 1,
    data,
    metadata,
  })
}
const getAllProductId = async (req, res) => {
  console.log(req.pagination);
  const { data, metadata }
    = await productService.getAllId();
  res.send({
    status: 1,
    data,
    metadata,
  })
}

const getAllUserId = async (req, res) => {
  console.log(req.pagination);
  const { data, metadata }
    = await userService.getAllUserId() 
  res.send({
    status: 1,
    data,
    metadata,
  })
}
const getAllOrderId = async (req, res) => {
  console.log(req.pagination);
  const { data, metadata }
    = await orderService.getAllOrderId() 
  res.send({
    status: 1,
    data,
    metadata,
  })
}

module.exports = {
  getAllCategoryId,
  getAllProductId,
  getAllUserId,
  getAllOrderId
}