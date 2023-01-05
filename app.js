require('dotenv').config()
const express = require('express')
const PORT = process.env.PORT
const app = express()


//Middleware
app.set('view engine','ejs');
app.use(express.json())
app.use(express.urlencoded({
    extended : true
}));
app.use(express.static('public'))




//Routes
app.use('/',require('./routes/comments'))




//Start server
app.listen(PORT,() => {
    console.log(`Listening on ${PORT} at http://localhost:${PORT}`)
})