const express = require('express');
const app = express();
const cors = require("cors")
const bookRoute = require('./routes/booksRoutes');  // Assuming routes are defined in this file

// Import database connection
require('./connection/conn');
app.use(cors());

// Use built-in JSON middleware for parsing JSON requests
app.use(express.json());  // This will automatically parse incoming JSON request bodies

// API route for books
app.use('/api/v1', bookRoute);

// Start server on port 1000
app.listen(1000, () => {
    console.log("Server Started Successfully!");
});
