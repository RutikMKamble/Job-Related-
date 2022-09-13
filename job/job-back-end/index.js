const express = require("express");
const cors = require('cors')

const app = express()


//Data Base connectivity===============================

const conn = require('./db')

conn.connection.on("connected", (err)=>{
    if(err){
        console.log("Datebase Not Connected....")
    }
    else(
        console.log("Connected With Database.....")
    )
})

app.use(cors());
app.use(express.json());

app.use('/jobs',require('./Routes/Job'))

app.use('/admitCard',require('./Routes/AdmitCard'))

app.use('/examResult',require('./Routes/ExamResult'))


// For to start a server
app.listen(5046, ()=>{
    console.log("Server Is Start....");
})