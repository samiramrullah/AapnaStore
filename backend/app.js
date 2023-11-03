const express=require('express');
const bodyParser=require('body-parser');
const morgan=require('morgan')
const mongoose=require('mongoose')

const app=express();
require('dotenv').config();

//middleware
const cors=require('./cors')
const error=require('./error')
//import Routes
const userRoute=require('./api/Routes/UserManagement/user');

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//db connection
mongoose.connect(process.env.ConnectionString).then(() => {
    console.log('Connected to Database');
}).catch((err) => console.log("Error in connecting to database"))
mongoose.Promise = global.Promise;

app.use(cors);

app.use('/api/user',userRoute)
app.use(error)

module.exports=app;
