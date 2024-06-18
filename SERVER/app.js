const express = require('express')
const router = require('./routes/router')
const app = express()
const port = 3000

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())



app.get('/', (req, res) => {
  res.send('Hello World!')
})
router
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})