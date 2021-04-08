const express = require('express');
const router = express.Router();

router.get('/get-api/:firstname/:lastname', async (req, res, next) => {
try{
    let message = `Welcome to nodejs ${req.params.firstname} ${req.params.lastname}`
    res.status(200).json({
        message: message
    })
    }
    catch(err){
        next(err);
    }
});

router.post('/post-api/:age/:number', async (req, res, next) => {
    try{
        let message = `Welcome to nodejs ${req.params.age} ${req.params.number}`
        res.status(200).json({
        message,
        data: "NODE JS TUORIALS"
        })
    }catch(err) {
    next(err);
    }
});

router.put('/put-api', function(req, res){
    res.send({type:'PUT'});
});

router.delete('/delete-api', function(req, res){
    res.send({type:'DELETE'});
});

module.exports = router;