const express = require('express');
const bodyParser = require('body-parser');

//create express app
const app = express();

//parse request of content type - application/x-www-form-urlencoded
app.use(bodyParser.json())

//config db
const dbconfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

//conect to the db
mongoose.connect(dbconfig.url, {
    useNewUrlParser: true
}) .then(()=>{
    console.log("suceessfully connect to the db");

}).catch(err =>{
    console.log("could not connect to the db");
    process.exit();
});
//define a simple route
app.get('/',(req,res)=> {
    res.json({"message" : "welcome to note app"});
});

//listen for req
app.listen(3000,()=> {
    console.log("server is listning on port 3000");
});