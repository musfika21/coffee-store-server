const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('coffee store server in running')
})

app.listen(port, () => {
  console.log(`coffee store is listening on port ${port}`)
})
