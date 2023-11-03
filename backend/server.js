const http=require('http');
const app=require('./app');
const swaggerApp=require('./swagger')

require('dotenv').config();
const port =process.env.PORT||5001;

const server=http.createServer(app)

server.listen(port,()=>{
    console.log(`Server running on ${port}`)
})
app.use('/api-docs', swaggerApp);