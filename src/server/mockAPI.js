
let json = {
    'title': 'test json response',
    'message': 'this is a message',
    'time': 'now'
}
async function mCloud(){
    
    let json = await axios.get('https://api.meaningcloud.com/sentiment-2.1?key=c177eceed70379b3181758e7a515679c&lang=auto&url=https://www.masrawy.com/')
    .then(function (response) {
      // handle success
      json = response.data
      console.log(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
    
    return json
}
module.exports = {
    json,
    mCloud
  }
