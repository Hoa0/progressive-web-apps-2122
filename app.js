const fetch = require('node-fetch')
const express = require('express');
const {
    response
} = require('express');
const res = require('express/lib/response');
const app = express()
const compression = require('compression')
const dotenv = require("dotenv").config({
    path: '.env'
});
const PORT = process.env.PORT || 3000;

const {
    API_KEY
} = process.env

const baseURL = 'https://www.rijksmuseum.nl/api/nl/collection'
const endpoint = `https://www.rijksmuseum.nl/api/nl/collection${API_KEY}`

app.use(compression())

/* Cache header*/
app.use(/.*-[0-9a-f]{10}\..*/, (req, res, next) => {
    res.setHeader('Cache-Control', 'max-age=365000000, immutable');
    next();
});
app.use(express.static(__dirname + '/static'))
app.set('view engine', 'ejs')


app.get('/', (req, res) => {
    fetch(`${endpoint}`)
        .then(async response => {
            const artCollection = await response.json()
            res.render('index', {
                title: 'Art overview',
                titlePage: 'Artcollection',
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
                title: 'Detailpage',
                titlePage: 'Art detail',
                data: artCollection.artObject // laat 1 object zien

            })
        })
        .catch(err => res.send(err))
})

app.get('/search', (req, res) => {
    fetch(`${endpoint}&q=${req.query.searchInput}&imgonly=true`)
        .then(async response => {
            const artCollection = await response.json()
            res.render('index', {
                title: 'Art overview',
                titlePage: 'Artcollection',
                data: artCollection.artObjects
            })
        })
        .catch(err => res.send(err))
})


app.get("/offline", (req, res) => {
    res.render("offline", {
        title: 'offline',
        titlePage: 'Geen internet',
    });
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})