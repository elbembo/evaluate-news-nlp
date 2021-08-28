const path = require('path')
const express = require('express')
const cors = require('cors')
const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();
const apiKey = process.env.API_KEY 
const PORT = process.env.PORT  || 3000;
//const mockAPIResponse = require('./mockAPI.js')
console.log(`Your API key is ${process.env.API_KEY}`);
const app = express()
app.use(cors())
app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(PORT, () => { console.log(`running on http://localhost:${PORT}`) })


app.get("/analyze", function (req, res) {
    const { url } = req.query;
    console.log(url);
    axios.get(`https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&lang=auto&url=${url}`)
    .then(function (response) {
      res.send(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
  });