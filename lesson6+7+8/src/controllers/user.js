const userService = require('../services/user')

const getAllUser = async (req, res) => {
  console.log(req.query);
  const { data, metadata } = await userService.getAll(req.pagination) 
  res.send({
    status: 1,
    data,
    metadata,
  })
}
const getUserById = async (req, res) => {
  const { id } = req.params;
  const { data } = await userService.getById(id);
  res.send({
      status: 1,
      data
    })
}
const createUser = async (req, res) => {
  await userervice.create(req.body)
  res.send({
    status: 1,
  })
}
const updateUser = async (req, res) => {
  const { id } = req.params;
  await userService.updateById(id, req.body)
  res.send({
    status: 1,// true - 1, false 0
  })
}
const deleteUser = async (req, res) => {
  const { id } = req.params;
  await userService.deleteById(id)
  res.send({
    status: 1,// true - 1, false 0
  })
}

// router => controllers => services 
module.exports = {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser
}