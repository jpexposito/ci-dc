"use strict";

const express = require('express');
const UserController = require('../controllers/user');
const {auth} = require('../middlewares');

const api = express.Router();

api.post('/user', UserController.create);
api.get('/user/:id', UserController.findById);
api.get('/user/email/:email', UserController.findByEmail);
api.get('/user', UserController.findAll);
api.delete('/user/:id', UserController.deleteById);
api.put('/user/:id', auth, UserController.updateById);

module.exports = api;