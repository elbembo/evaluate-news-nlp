const axios = require('axios');
async function getAnalyzeData(url) {
  return  await axios.get(`https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&lang=auto&url=${url}`)
      .then(function (response) {
          return response.data
      })
      .catch(function (error) {
          console.log(error);
      })
}
module.exports = { getAnalyzeData }