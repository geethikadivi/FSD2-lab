const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();

// View engine
app.set('view engine', 'ejs');

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
    session({
        secret: 'my-secret-key',
        resave: false,
        saveUninitialized: true,
        cookie: {
            maxAge: 60000
        }
    })
);

// -------------------------
// Public Route: Login Page
// -------------------------

app.get('/login', (req, res) => {
    res.render('login', { error: null });
});

// -------------------------
// Login
// -------------------------

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Hardcoded username and password
    if (username === 'admin' && password === '123') {

        // Create session
        req.session.isLoggedIn = true;
        req.session.username = username;

        // Create cookie
        res.cookie('lastVisit', new Date().toLocaleTimeString());

        // Redirect to dashboard
        res.redirect('/dashboard');

    } else {
        res.render('login', {
            error: 'Invalid credentials!'
        });
    }
});

// -------------------------
// Private Route Middleware
// -------------------------

function isAuthenticated(req, res, next) {

    if (req.session.isLoggedIn) {
        next();
    } else {
        res.redirect('/login');
    }
}

// -------------------------
// Private Route: Dashboard
// -------------------------

app.get('/dashboard', isAuthenticated, (req, res) => {

    const lastVisit = req.cookies.lastVisit || 'First time';

    res.render('dashboard', {
        user: req.session.username,
        lastVisit: lastVisit
    });
});

// -------------------------
// Logout
// -------------------------

app.get('/logout', (req, res) => {

    res.clearCookie('lastVisit');

    req.session.destroy((err) => {
        if (err) {
            return res.send('Error logging out');
        }

        res.redirect('/login');
    });
});

// -------------------------
// Start Server
// -------------------------

app.listen(3000, () => {
    console.log('Server: http://localhost:3000/login');
});