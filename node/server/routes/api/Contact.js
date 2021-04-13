const express = require('express');
const bcrypt =  require('bcrypt');
const router = express.Router();
const contact = require('../../db-init/models/contactSchema');
const newToken = require('../../middlewares/token');
const auth = require('../../middlewares/auth');

// Create New Contact
// For creating a new document we use (POST)
router.post('/newcontact', async(req, res, next) => {
    try{
        const isContactExist = await contact.findOne({email: req.body.email});
        if(isContactExist){
            res.status(400).json({
                message: `Contact Already Exists`
            })
        } else{
            const newContact = await contact.create({
                email: req.body.email,
                name: req.body.name,
                password: await bcrypt.hash(req.body.password,5)
            })
            res.status(200).json({
                data: newContact,
                message: `New Contact created Successfully`,
            })
        }
    } catch(err){
        next(err);
    }
});

// Fetch all contacts
// for fetching we use (GET)

router.get('/getContacts', async(req, res, next) => {
    try{
        let allContacts = await contact.find();
        if(allContacts){
            res.status(200).json({
                data: allContacts,
                message : `All Contacts Fetched Successfully`
            })
        }else{
            res.status(400).json({
                message : `Empty Collection`
            })
        }
    } catch(err){
        next(err);
    }
});

// Update Contacts
// for updating we use (PUT)

router.put('/update-contact',async(req, res, next) => {
    try{
        const isContactExist = await contact.findOne({email:req.body.email});
        if(isContactExist){
            await contact.updateOne({email:req.body.email},{
                $set:{
                    name:req.body.name,
                }
            }).then(() => {
                res.status(200).json({
                    message: `Contact Updated Successfully`
                })
            }).catch((err) => {
                res.status(400).json({
                    message: `Error while Updating`,
                    err: err,
                })
            })
        } else{
            res.status(400).json({
                message: `Contact Not Found`
            })
        }    
    } catch(err){
        next(err);
    }
});

// Delete a Contact
// for deleting we use(DELETE)

router.delete('/delete-contact',async(req, res, next) => {
    try{
        const isRecordThere = await contact.find({email: req.body.email});
        if(isRecordThere){
            await contact.deleteOne({email: req.body.email})
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

// DELETE ALL CONTACT

router.delete('/delete-all', async (req, res, next) => {
    try {
        let all_contact = await contact.deleteMany({});
        res.status(200).json({
            message: `All Contacts Deleted Successfully`
        })
    } catch(err) {
        next(err);
    }
})

module.exports = router;