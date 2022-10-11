const express = require('express');
const bodyParser = require('body-parser')


const app = express();


const port = process.env.port || 8010

const authRoute = require('./routes/auth-route')
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect('mongodb://localhost:27017/shopapp', (err) => {
    if (err) {
        console.log("DataBase is not connected")
    }
    else {
        console.log("DataBase is Connected")
    }
});


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
app.use('/auth', authRoute);

app.get('/', (req, res) => {
    res.send("Welcome chhote you have created get api")
})

app.listen(port, () => {
    console.log("Node server is connected", port)
})