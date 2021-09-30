// =======================================
//              DEPENDENCIES
// =======================================
require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
// =======================================
//              DATABASE
// =======================================
// Database Configuration
mongoose.connect(process.env.DATABASE_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});
// Database Connection Error / Success
const db = mongoose.connection;
db.on('error', (err) => console.log(err.message + ' is mongod not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));
// =======================================
//              MODELS
// =======================================

// =======================================
//              MIDDLEWARE
// =======================================
// Body parser middleware: give us access to req.body
app.use(express.urlencoded({ extended: true }));

// =======================================
//              ROUTES
// =======================================
// Routes / Controllers
const userController = require('./controllers/users');
app.use('/users', userController);

// INDEX (get)


// NEW (get)


// DESTROY (delete)


// UPDATE (put)


// CREATE (post)


//EDIT (get) (put)


// SHOW (get)


// =======================================
//              LISTENER
// =======================================
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`server is listening on port: ${PORT}`));