const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;
const host = 'localhost';
const mongoose = require('mongoose');
const router = require('./router');

app.use(cors());
app.use(express.json()); 

const uri = 'mongodb+srv://paman:paman2001@cluster04.w0x6oir.mongodb.net/student1?retryWrites=true&w=majority&appName=Cluster04';

const connect = async() => {
    try{
        await mongoose.connect(uri);
        console.log('connect to MongoDB');

    }
    catch(error){
        console.log('MongoDB Error:', error);

    }
};

connect();

const server = app.listen(port,host, () =>{
    console.log(`Node server is listening to ${server.address().port}`)
});

app.use('/api', router);

