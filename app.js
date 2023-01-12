require('dotenv').config()
const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const methodOverride = require('method-override')
const PORT = process.env.PORT
const app = express()


//Middleware
app.set('view engine','ejs');
app.use(express.json())
app.use(express.urlencoded({
    extended : false
}));
app.use(express.static('public'))
app.use(expressLayouts);
app.set('layout','layouts/layout');
app.use(methodOverride('_method'))


//Routes
app.use('/',require('./routes/persons'));




//Start server
app.listen(PORT,() => {
    console.log(`Listening at http://localhost:${PORT}`)
})