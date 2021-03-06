const path = require('path')
const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv');
const analyzeRoute = require('./routers/analyzeRoute');
dotenv.config();
const PORT = process.env.PORT || 8081
const app = express()
app.use(cors())
app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
  res.sendFile('dist/index.html')
  //  res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`)
})


app.use("/analyze", analyzeRoute);
