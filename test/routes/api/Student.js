const express = require('express');
const bcrypt =  require('bcrypt');
const router = express.Router();
const student = require('../../db-init/models/studentSchema');
const newToken = require('../../middlewares/token');
const auth = require('../../middlewares/auth');

// Create New Student
// For creating a new document we use (POST)
router.post('/newstudent', async(req, res, next) => {
    try{
        const isStudentExist = await student.findOne({email: req.body.email});
        if(isStudentExist){
            res.status(400).json({
                message: `Student Already Exists`
            })
        } else{
            const newStudent = await student.create({
                name: req.body.name,
                email: req.body.email,
                password: await bcrypt.hash(req.body.password,5),
                phone: req.body.phone,
                address: req.body.address,
                subjects: req.body.subjects,
                branch: req.body.branch,
                year: req.body.year
            })
            res.status(200).json({
                data: newStudent,
                message: `New Student created Successfully`,
            })
        }
    } catch(err){
        next(err);
    }
});

// Fetch all students
// for fetching we use (GET)

router.get('/get-all-students', auth, async(req, res, next) => {
    try{
        let allStudents = await student.find();
        res.status(200).json({
            data: allStudents,
            message : `All Students Fetched Successfully`
        })
    } catch(err){
        next(err);
    }
});

// Fetch user by email
router.put('/get-student-by-email', async(req, res, next) => {
    try{
        let studentEmail = await student.findOne({email: req.body.email});
        if(studentEmail){
            res.status(200).json({
                data: studentEmail,
                message : `All Students Fetched by Email Successfully`
            })
        }
    } catch(err){
        next(err);
    }
});

// Update Students
// for updating we use (PUT)

router.put('/update-student',async(req, res, next) => {
    try{
        const isStudentExist = await student.findOne({email:req.body.email});
        if(isStudentExist){
            await student.updateOne({email:req.body.email},{
                $set:{
                    name:req.body.name,
                }
            }).then(() => {
                res.status(200).json({
                    message: `Student Updated Successfully`
                })
            }).catch((err) => {
                res.status(400).json({
                    message: `Error while Updating`,
                    err: err,
                })
            })
        } else{
            res.status(400).json({
                message: `Student Not Found`
            })
        }    
    } catch(err){
        next(err);
    }
});

// Delete a record
// for deleting we use(DELETE)

router.delete('/delete-student',async(req, res, next) => {
    try{
        const isRecordThere = await student.findOne({email: req.body.email});
        if(isRecordThere){
            await student.deleteOne({email: req.body.email})
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

// Checking login by password matching

router.put('/login-student', async (req, res, next) => {
    try {
        const isUserExist = await student.findOne({ email: req.body.email });
        if (isUserExist) {
            let isPassMatch = bcrypt.compareSync(req.body.password, isUserExist.password)
            if(!isPassMatch){
                res.status(400).json({
                    message: `Password Does not match`
                })
            }else{
                const payload = {
                    email : isUserExist.email,
                    _id : isUserExist._id,
                    name : isUserExist.name
                }
                let token = newToken.generateToken(payload);
                res.status(200).json({
                    token,
                    message: `Loged In successfully`
                })
            } 
        } else {
            res.status(400).json({
                message: `User Not Found`
            })
        }
    } catch (err) {
        next(err)
    }
})

module.exports = router;