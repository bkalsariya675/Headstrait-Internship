const express = require('express');
const mongoose = require('mongoose');

let contactSchema = new mongoose.Schema({
    email: {type: String, required: true, unique: true, index: true},
    name : {type: String},
    password : {type: String}
    },
    {
        collection: 'contactDetails'
    }
);
let contactModel = mongoose.model('Contact', contactSchema);
module.exports = contactModel;