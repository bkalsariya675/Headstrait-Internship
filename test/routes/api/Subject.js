const express = require('express');
const router = express.Router();
const subject = require('../../db-init/models/subjectSchema');
router.post('/new-subject', async(req, res, next) => {
    try{
        const isSubjectExist = await subject.findOne({sub_name: req.body.sub_name});
        if(isSubjectExist){
            res.status(400).json({
                message: `Subject Already Exists`
            })
        } else{
            const newSubject = await subject.create({
                sub_name: req.body.sub_name,
                no_of_modules : req.body.no_of_modules
            })
            res.status(200).json({
                data: newSubject,
                message: `New Subject added Successfully`,
            })
        }
    } catch(err){
        next(err);
    }
})

router.get('/get-all-subjects', async(req, res, next) => {
    try{
        let allSubjects = await subject.find();
        res.status(200).json({
            data: allSubjects,
            message : `All Subjects Fetched Successfully`
        })
    } catch(err){
        next(err);
    }
});

router.put('/update-subject',async(req, res, next) => {
    try{
        const isSubjectExist = await subject.findOne({sub_name:req.body.sub_name});
        if(isSubjectExist){
            await subject.updateOne({sub_name:req.body.sub_name},{
                $set:{
                    no_of_modules:req.body.no_of_modules,
                }
            }).then(() => {
                res.status(200).json({
                    message: `Subject Updated Successfully`
                })
            }).catch((err) => {
                res.status(400).json({
                    message: `Error while Updating`,
                    err: err,
                })
            })
        } else{
            res.status(400).json({
                message: `Subject Not Found`
            })
        }    
    } catch(err){
        next(err);
    }
});

router.delete('/delete-subject',async(req, res, next) => {
    try{
        const isRecordThere = await subject.findOne({sub_name:req.body.sub_name});
        if(isRecordThere){
            await subject.deleteOne({sub_name:req.body.sub_name})
            .then(() => {
                res.status(200).json({
                    message: `Record Deleted Successfully`
                })
            })
            .catch((err) => {
                res.status(200).json({
                    message: `Error while deleting`,
                    err: err
                })
            })
        }else{
            res.status(400).json({
                message :`No document in Collection`
            })
        }
    } catch(err){
        next(err)
    }
});

module.exports = router;