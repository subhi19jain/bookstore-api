const express = require('express');

const {loggerMiddleWare}= require('./middlewares/logger');

const bookRouter = require('./routes/book.routes');

const { error } = require('node:console');

const app = express();
const PORT =8000;

// fs.appendFile('logx.txt', log, 'utf-8', (err) => {
//     if (err) console.error(err);
// });


app.use(express.json());
app.use(loggerMiddleWare);


//using bookRouter----router
app.use('/books', bookRouter);

app.listen(PORT,()=> console.log(`http server is running on port ${PORT}`));