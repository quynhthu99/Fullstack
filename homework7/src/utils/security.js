const bcrypt = require('bcrypt') // neu loi chay npm i node-gyp
const jwt = require('jsonwebtoken')

const { JWT_SECRET_KEY } = process.env
const SALT_ROUND = 10
// 1.ma hoa 1 chieu
const generatePassword = async (password) => {
    const hashedPassword = await bcrypt.hashSync(password, process.env.SALT_ROUND)
    console.log(hashedPassword);
    return hashedPassword;
}
//2. ma hoa 2 chieu
const generateToken = ({ username, role }) => {
    jwt.sign(
        {
            username, role
        },
        JWT_SECRET_KEY,
        {
            expiresIn: 1000 * 60 * 60 * 24
        }
    );
    return generateToken;
}
//3. xac thua ma hoa 1 chieu

// const verifyPassword = async (username, password) => {
    // const sql = 'SELECT username, password FROM account WHERE username = ? LIMIT 1;'
    // const data = db.queryOne(sql,[username])
    //
    const verifyPassword = async(password, hashedPassword) => {
        const result = await bcrypt.compareSync(password, hashedPassword);
        console.log(result ? 'dung' : 'sai');
        return result;
    };
    //4. giai ma hoa 2 chieu
    const verifyToken = token => {
        const data = jwt.verify(token, JWT_SECRET_KEY)
        return data
    }
    module.exports = {
        generatePassword,
        verifyPassword,
        generateToken,
        verifyToken
    }