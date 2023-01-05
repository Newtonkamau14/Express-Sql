//




//Get index page
exports.index = (req,res) => {
    res.render('index.ejs',{
        title: 'Homepage'
    })
}


