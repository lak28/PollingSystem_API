
const express = require('express');
const app = express();const port = 3000;

const db = require('./config/mongoose');

app.use(express.urlencoded());
app.use(express.json());
app.use('/',require('./routes/index'));
 

app.listen(port,function(error){
    if(error) {
        console.log(`Error in running server ${error}`);
        return;
    }
    console.log(`Server is running on port ${port}`);
});







