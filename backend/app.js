require('dotenv').config();
const express = require('express');
const app = express();
const port = 5000 || process.env.PORT;

const connectDB = require('./db/connect');

const bookRouter = require('./router/BookRouter');
const magazineRouter = require('./router/MagazineRoutes');
const authorRouter = require('./router/AuthorRoutes');

app.use(express.json());
app.use('/api/v1/book',bookRouter);
app.use('/api/v1/magazine',magazineRouter);
app.use('/api/v1/author',authorRouter);

const start = async(url) =>{
    await connectDB(url);
    app.listen(port,()=>{
        console.log(`App is listening at ${port}`);
    })
}

start(process.env.MONGO_URI);