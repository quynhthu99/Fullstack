const db = require("../utils/db");

const getAll = async ({ limit, offset }) => {
const sql = `SELECT userId, username, age, 
                FROM user
                WHERE isDelete = 0
                LIMIT ?
                OFFSET ?;`;
const countSql = `SELECT COUNT(userId) AS total
                    FROM user
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

const getById = async (userId) => {
const sql = `SELECT username, userId, age
            FROM user
            WHERE userId = ?
                AND isDelete = 0
            LIMIT 1;`;
const data = await db.queryOne(sql, userId);
  return {
    data,
  };
};

const create = async ({ username, userId }) => {
const sql = `
INSERT INTO user(userId, username, age)
VALUES (uuid(), ?, ?, ?, ?, ?, ?);`;

const data = await db.query(sql, params);
};

const updateById = async (
  userId, username, age )=> {
const sql = `UPDATE user
            SET username = ?, 
                userId = ?,
                age = ?,
            WHERE userId = ?
                    AND isDelete = 0;`;

const data = await db.query(sql, params);
};

const deleteById = async (orderId) => {
const sql =
`UPDATE user
SET isDelete = 1
WHERE userId = ?;`;
const data = await db.query(sql, userId);
};

const getAllUser = async () => {
const sql = `
SELECT userId, username, age
FROM user
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
    getAllUser
};