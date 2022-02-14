"use strict";

const express = require('express');
const AuthController = require('../controllers/auth');

const api = express.Router();

api.patch('/auth', AuthController.login);
api.patch('/auth/:id', AuthController.activate);

module.exports = api;