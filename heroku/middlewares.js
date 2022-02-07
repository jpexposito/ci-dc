"use strict";
const User = require('./models/user');
const {decode} = require('./services/jwt');
const multer = require('multer');
const response = (res, status, send) => {
    res.status(status).send({message: send});
}

const auth = async (req, res, next) => {
    const reqId = req.params.id;
    if (!req.headers.authorization) {
        response(res, 401, 'no authorized');
        return;
    }
    const [prefix, token] = req.headers.authorization.split(' ')
    if (prefix !== 'Bearer') {
        response(res, 400, 'prefix must be Bearer');
        return;
    }
    const {API_SECRET} = req.app.locals.config;
    const payload = decode(token, API_SECRET);
    console.log(req.params.id)
    const user = await User.findById(reqId);
    const {id, email} = user;
    if (!user) {
        response(res, 400, 'usuario no encontrado');
        return;
    }
    if (email !== payload.email) {
        response(res, 409, 'payload conflictivo');
        return;
    }
    if (id !== payload.id) {
        response(res, 409, 'payload conflictivo');
        return;
    }
    next();
};
const mongo_uri = `mongodb+srv://app-data.kq6vy.mongodb.net/?retryWrites=true&w=majority`;
const storage = new GridFsStorage({
    url: mongo_uri,
    file: (req, file) => {
        return new Promise((resolve, reject) => {
            const filename = file.originalname;
            const fileInfo = {
                filename: filename,
                bucketName: "newBucket"
            };
            resolve(fileInfo);
        });
    }
});
const upload = multer({storage})
module.exports = {
    auth, upload
}