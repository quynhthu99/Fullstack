const db = require("../utils/db");

const getAll = async ({ limit, offset }) => {
const sql = `SELECT orderId, username, productId, price, total
                FROM order
                WHERE isDelete = 0
                LIMIT ?
                OFFSET ?;`;
const countSql = `SELECT COUNT(orderId) AS total
                    FROM order
                    WHERE isDelete = 0;`;
const params = [limit, offset];
const data = await db.queryMulti(sql, params);
const total = await db.queryOne(countSql);
  return {
    data,
    metadata: {
      length: data.length,
      total,
    },
  };
};

const getById = async (orderId) => {
const sql = `SELECT username, productId, price, total
            FROM order
            WHERE orderId = ?
                AND isDelete = 0
            LIMIT 1;`;
const data = await db.queryOne(sql, orderId);
  return {
    data,
  };
};

const create = async ({ username, productId, price, total }) => {
const sql = `
INSERT INTO order(orderId, username, productId, price, total)
VALUES (uuid(), ?, ?, ?, ?, ?, ?);`;

const data = await db.query(sql, params);
};

const updateById = async (
  orderId, username, productId, price, total )=> {
const sql = `UPDATE order
            SET username = ?, 
                productId = ?,
                price = ?,
                total = ?,
            WHERE orderId = ?
                    AND isDelete = 0;`;

const data = await db.query(sql, params);
};

const deleteById = async (orderId) => {
const sql =
`UPDATE order
SET isDelete = 1
WHERE orderId = ?;`;
const data = await db.query(sql, orderId);
};

const getAllOrder = async () => {
const sql = `
SELECT orderId, username, price, total
FROM order
WHERE isDelete = 0;`;
const data = await db.queryMulti(sql);
  return {
    data,
    metadata: {
      length: data.length,
    },
  };
};

module.exports = {
   
    getAll,
    getById,
    create,
    updateById,
    deleteById,
    getAllOrder
};