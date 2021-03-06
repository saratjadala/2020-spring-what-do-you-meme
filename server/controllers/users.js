/* B"H
*/
const express = require('express');

const users = require('../models/Users');

const router = express.Router();

router
    .post('/login', async (req, res) => {
        try {
            const user = await users.Login(req.body.email, req.body.password);
            res.send( { ...user, Password: undefined } );
        } catch (error) {
            res.status(401).send({ message: error.message });
        }
    })

module.exports = router;