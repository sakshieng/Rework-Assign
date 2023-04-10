const express = require('express');
const {connectDB} = require('./db/connect');
const bookRouter = require('./router/BookRouter');
const app = express();
const port = 3000 || process.env.PORT;

app.use(express.json());
app.use('/api/v1/use',bookRouter);


const start = async(url) =>{
    await connectDB(url);
    app.listen(port,()=>{
        console.log(`App is listening at ${port}`);
    })
}

start(process.env.MONGO_URI);