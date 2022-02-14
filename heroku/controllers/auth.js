"use strict";

const User = require('../models/user');
const {badRequest, internalServerError, notFound} = require('../error');
const bcrypt = require('bcryptjs');
const {encode, decode} = require('../services/jwt');

const login = async (req, res) => {
    const {payload} = req.body;
    console.log(payload)
    try {
        if(!payload) {
            res.status(400).send(badRequest('falta payload'));
            return;
        }
        const user = await User.findOne({email: payload.email});
        const {activated} = user;
        if (!activated) {
            res.status(401).send(badRequest('falta activación de cuenta'));
            return
        }
        if (!user) {
            res.status(400).send(badRequest('email o contraseña incorrectos'));
            return;
        }
        const {password} = user;
        const match = await bcrypt.compare(payload.password, password);
        if (!match) {
            res.status(400).send(badRequest('email o contraseña incorrectos'));
            return;
        }
        const {id} = user;
        const authenticatedUser = await User.findByIdAndUpdate(id, {lastCacheAt: Date.now()}, {new: true});
        payload.password = password
        const token = encode(authenticatedUser, '12h')
        console.log(token)
        res.status(200).send({token, authenticatedUser});
    } catch (e) {
        res.status(500).send(internalServerError(e));
    }
};

const activate = async (req, res) => {
    const id = req.params.id;
    const {API_SECRET} = req.app.locals.config;
    console.log(id, API_SECRET);
    try {
        const user = await User.findByIdAndUpdate(
            id,
            {
                activated: true,
                lastCacheAt: Date.now()
            },
            {
                new: true
            }
        );
        if (!user) {
            res.status(404).send(notFound("User", id));
            return;
        }
        res.status(200).send({token: encode(user, '12h'), activatedUser: user});
    } catch (e) {
        res.status(500).send(internalServerError(e));
    }
}

module.exports = {
    login,
    activate
};