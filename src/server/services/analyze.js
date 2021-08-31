
const theAPIs = require('../mockAPI');
async function getAnalyze(url) {
    const data = await theAPIs.getAnalyzeData(url)

    return  data 
}
module.exports = { getAnalyze }