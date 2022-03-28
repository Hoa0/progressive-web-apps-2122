
//import fetch from 'node-fetch';
//const express = require('express','4.17.3')
const fetch =require('node-fetch')
const express = require('express')
const app = express()
const dotenv = require("dotenv").config();
const port = process.env.port || 3000;


const baseURL = 'https://www.rijksmuseum.nl/api/nl/collection'
const key = '?key=m37TFPjT&ps=20'
const endpoint ='https://www.rijksmuseum.nl/api/nl/collection?key=m37TFPjT&ps=20'

app.use(express.static('static'))
app.set('view engine', 'ejs')

const {
    API_KEY
} = process.env

app.get('/', (req, res) => {
  res.render('home',{
    title:'List of all artcollection hi'
  });
});

/*
app.get('/overview', async(req, res) => {
 const getData = await fetch(endpoint);
 const json = await getData.json();
console.log(json);

  res.render('overview',{
    title:'overzicht',
  });
});*/

app.get('/overview', (req, res) => {
    fetch(endpoint)
        .then(async response => {
            const artCollection = await response.json()
            res.render('overview', {
                title: 'overzicht iets',
                data: artCollection.artObjects
                
            })
           // console.log(artCollection);
        })
        .catch(err => res.send(err))
})


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