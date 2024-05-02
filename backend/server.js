const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');
const PORT = process.env.PORT || 8000;

// Connect to DB
connectDB();
console.log(process.version);

console.log('process.env.MONGO_URI', process.env.MONGO_URI)
const app = express();
const errorHandler = require('./middleware/errorMiddleware')
// body parser
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res)=> {
    res.status(200).json({message: 'Welcome to the Help Desk API'})
});

// Routes
app.use('/api/users', require('./routes/userRoutes'));

app.use(errorHandler);
app.listen(PORT, ()=> console.log(`Server started on port: ${PORT}`));
