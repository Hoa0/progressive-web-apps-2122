const fetch =require('node-fetch')
const express = require('express')
const app = express()
const dotenv = require("dotenv").config({path: '.env'});
const port = process.env.port || 3000;

const {
    API_KEY
} = process.env

const baseURL = 'https://www.rijksmuseum.nl/api/nl/collection'
const endpoint =`https://www.rijksmuseum.nl/api/nl/collection${API_KEY}`

app.use(express.static('static'))
app.set('view engine', 'ejs')



app.get('/', (req, res) => {
    fetch(`${endpoint}`)
        .then(async response => {
            const artCollection = await response.json()
            res.render('index', {
                title: 'overzicht iets',
                data: artCollection.artObjects 
            })
        })
        .catch(err => res.send(err))
})

app.get('/detail/:id', (req, res) => {
    fetch(`${baseURL}/${req.params.id}${API_KEY}`)
        .then(async response => {
            const artCollection = await response.json()
            console.log(artCollection);
            res.render('detail', {
                title: 'detail',
                data: artCollection.artObject // laat 1 object zien
                
            })
        })
        .catch(err => res.send(err))
})


app.get("/offline", (req, res) => {
    res.render("offline", {
        title: 'offline',
    });
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

/*
async function getData(url){
  return await fetch(url)
  .then((response) => response.json())
  .then((body)=> body.data)
  .catch((error) => error)
}*/