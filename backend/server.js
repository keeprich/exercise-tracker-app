const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

// connecting to routes
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// database connection


const uri = process.env.ATLAS_URI;
// mongoose.connect(uri);
const connection = mongoose.connect(uri);
connection.then(() => {
    console.log('mongodb connected...££££££..test and see it worked');
})



app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);


// connecting to database
// const uri = process.env.ATLAS_URI;
// mongoose.connect(uri, {useNewUrlParser: true});

// mongoose.connect('mongodb+srv://UserName:<password>@cluster0-8vkls.mongodb.net/test?retryWrites=true&w=majority', {
//   useNewUrlParser: true
// });


// const connection = mongoose.connection;
// connection.once('open', () => {
//     console.log("MongoDB database Connection is working Successfully");
//  });

app.listen(port, () => {
    console.log(`server is running on port: ${port}`);
});