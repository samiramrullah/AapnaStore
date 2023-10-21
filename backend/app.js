const expess=require('express');
const morgan=require('morgan');
const bodyParser=require('body-parser');
const mongoose=require('mongoose')

const app=expess();
require('dotenv').config();

//Routes
const userRoute=require('./api/user');

app.use(morgan('dev'));

//db connection

mongoose.connect(process.env.ConnectionString).then(()=>{
    console.log('Connected to database');
}).catch((err)=>console.log(err))
mongoose.Promise=global.Promise;


//Handeling cors error

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')  //wildcard
    res.header('Access-Control-Allow-Headers', '*');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Methods', 'POST', 'GET', 'PATCH', 'DELETE')
        return res.status(200).json({});
    }
    next();
})


//bodyparser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


//Routes

app.use('/api/user',userRoute);


//Error handeling
//if no paths matched

app.use((req, res, next) => {
    const error = new Error('No matching paths')
    error.status = 404;
    next(error);
})

// if methods not matched

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
})