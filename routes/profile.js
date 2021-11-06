const express = require('express');
const validator = require('validator');
const router = express.Router();
const userModel = require('../models/user')

router.get('/profile', async (req, res) => {

    res.status(201).json(req.user)
})


module.exports = router;