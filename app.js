const express = require('express','4.17.3')
const ejs = require('ejs');
const app = express()
const port = 3000

app.use(express.static('public'))
app.set('view engine', 'ejs')
/*
app.get('/', (req, res) => {
  res.send('Hello World! h test nodemon hahahha yo')
})*/

app.get('/', (req, res) => {
  res.render('home',{
    title:'List of all artcollection hi'
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})