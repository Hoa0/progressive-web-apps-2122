const express = require('express','4.17.3')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World! h test nodemon hahahha')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})