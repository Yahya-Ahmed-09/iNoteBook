const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    obj = {
        name: "Yahya",
        FatherName: "Muhammad Umer"
    }
    res.json(obj)
})

module.exports = router