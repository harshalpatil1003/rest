const express = require('express');
const app = express();
const fs  = require('fs');

const bodyParser = require('body-parser');





app.use('/harshal',(req,res,next)=>{
    res.status(200);
    res.json(
         "Hi Harshal is here"
            );
    


});




app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status(404);
    next(error);
});



app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({

        error: {
            message : error.message
        }


    });


});



module.exports = app;
