const express = require("express");
// set up express app
const app = express();
const contact = require('./routes/api/Contact');

const cors = require("cors");
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

const mongoUrl = "mongodb://localhost:27017/ContactsDB";
mongoose.connect(mongoUrl,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // below is used for deprecation warning
    useCreateIndex: true
}).then(() => {
    console.log(`Database Connected Successfully!`)
}).catch((err) => {
    console.log(`MongoDB Connection Error ${err}`)
})

app.use(cors());
app.use(bodyParser.json());
app.use(logger('common'));
//  listen for requests
app.listen(3000, () => {console.log('SERVER IS RUNNING ON localhost:3000')});

app.use((err, req, res, next) => {
    next(error(err, req, res, next));
});
// initialize routes
app.use("/api/contact", contact)
module.exports = app;