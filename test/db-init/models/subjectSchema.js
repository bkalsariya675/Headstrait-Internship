const express = require('express');
const mongoose = require('mongoose');

let subjectSchema = new mongoose.Schema({
    sub_name : {type: String, required: true, unique: true, index: true},
    no_of_modules : {type: Number}
    },
    {
        collection: 'subject'
    }
);
let subjectModel = mongoose.model('Subjects', subjectSchema);
module.exports = subjectModel;