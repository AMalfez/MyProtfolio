const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 5000;

const User = require('./schema');
// NOTE: special characters in password like @ ? / ! etc. has to be converted to url encoded
const DB = 'mongodb+srv://iamAM:AMalfez%402003@cluster0.raacjyz.mongodb.net/Cluster0?retryWrites=true&w=majority'

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log('connection success');
}).catch((err)=>{console.log(err);})

app.use(express.json());

app.get('/', (req,res)=>{
    res.send('HI i am Express js server');
})

app.post('/contact', (req,res)=>{
    //const {fname, lname, email, description} = req.body;
    res.json({message: req.body})
    //build a system that adds desc. from same person
    const user = new User(req.body).save().then(()=>{
        console.log('Registered');
    }).catch((err)=>{res.json({error: `not registered: ${err}`})})

})

app.listen(port, ()=>{
    console.log(`Example app listening on port http://localhost:${port}/`)
})