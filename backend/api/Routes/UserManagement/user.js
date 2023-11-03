const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const userSchema = require('../../../Model/UserManagement/user');
const checkauth = require('../../middleware/check-auth')


router.get('/getallusers', checkauth, async (req, res, next) => {
    try {
        const users = await userSchema.find({}, 'name email').exec();

        if (users) {
            res.status(200).json({
                status: true,
                users: users
            });
        } else {
            res.status(404).json({
                status: false,
                message: 'No users found'
            });
        }
    } catch (error) {
        res.status(500).json({
            status: false,
            message: 'Error in getting users'
        });
    }
});

router.get("/:id", checkauth, async (req, res, next) => {
    try {
        const userId = req.params.id;
        const user = await userSchema.findOne({ _id: userId} ,'name email').exec();
        if (user) {
            res.status(200).json({
                status: true,
                user,
            });
        } else {
            res.status(404).json({
                status: false,
                message: 'User not found'
            });
        }
    } catch (error) {
        res.status(500).json({
            status: false,
            message: 'Error in getting user'
        });
    }
});


module.exports = router;