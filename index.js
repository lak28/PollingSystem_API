//Main server file
const express = require('express');
const app = express();

var port = process.env.PORT ||3000;

const db = require('./config/mongoose');

app.use(express.urlencoded());
app.use(express.json());
app.use('/',require('./routes/index'));
 

app.listen(port,function(error){
    if(error) {
        console.log(`Error in running server`);
        return;
    }
    console.log(`Server is running on port 3000`);
});







