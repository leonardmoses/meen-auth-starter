// =======================================
//              DEPENDENCIES
// =======================================
require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const session = require('express-session');
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

app.use(
    session({
        secret: process.env.SECRET,
        resave: false,
        saveUninitialized: false
    }));
// =======================================
//              ROUTES
// =======================================

// Controllers (links server routes to the contoller routes)
const userController = require('./controllers/users');
app.use('/users', userController);

const sessionsController = require('./controllers/sessions');
app.use('/sessions', sessionsController);


// Temporary root route. Please remove me when you add views:
app.get("/", (req, res) => {
    res.send("Root route");
});



// =======================================
//              LISTENER
// =======================================
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`server is listening on port: ${PORT}`));