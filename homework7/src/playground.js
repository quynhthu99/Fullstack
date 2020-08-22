const security = require('./utils/security')

const token = security.generateToken({
    username: 'thu',
    role: 1
})
console.log(token);

const data
    = security.verifyToken(toke)
console.log(data);