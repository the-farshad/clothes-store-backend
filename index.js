var express = require('express');
var app = express();
const path = require('path');

var PORT = process.env.PORT || 3000;

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Members API Routes
app.use('/api/v1', require('./api/stores'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))