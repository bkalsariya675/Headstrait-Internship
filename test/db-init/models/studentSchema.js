const express = require('express');
const mongoose = require('mongoose');

let studentSchema = new mongoose.Schema({
    name : {type: String},
    email : {type: String, required: true, unique: true, index: true},
    phone: {type: Number},
    address: {
        street_name: String,
        zipcode: Number
    },
    subjects: [{type: mongoose.Schema.Types.ObjectId}],
    branch: {type: String},
    year: {type: String}
    },
    {
        collection: 'student'
    }
);

let studentModel = mongoose.model('Student', studentSchema);
module.exports = studentModel;

