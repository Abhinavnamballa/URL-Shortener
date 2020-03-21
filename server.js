const express = require('express');
const mongoose = require('mongoose');
const ShortUrl = require('./models/shortUrl');
const app = express();


const uri = process.env.ATLAS_URI;

mongoose.connect(uri,{
    useNewUrlParser: true, useUnifiedTopology: true
})

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))

app.get('/',(req,res) =>{
    const shortUrls = ShortUrl.find()
    res.render('index', {shortUrls: shortUrls})
})

app.post('/shortUrls', (req,res)=>{
  ShortUrl.create({ full: req.body.FullUrl })

 res.redirect('/')
})
app.listen(process.env.PORT || 5000);


