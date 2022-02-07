const jwt = require('jsonwebtoken');

const {API_SECRET} = process.env;

const encode = (user, expiresIn) => {
    const {id, email} = user;
    const payload = {
        id,
        email
    }
    return jwt.sign(payload, API_SECRET, {expiresIn});
};

const decode = (token) => {
    return jwt.decode(token, API_SECRET);
};

module.exports = {
    encode,
    decode
}
