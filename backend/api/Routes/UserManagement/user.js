const express = require('express');
const router = express.Router();
const checkauth = require('../../middleware/check-auth')




router.get('/getalluser', checkauth, (req, res, next) => {
    res.status(200).json({
        message: "all users",
    })
})

module.exports=router;