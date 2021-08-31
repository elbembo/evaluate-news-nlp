const express = require('express');
const router = express.Router();
const analyze = require('../services/analyze');

router.get('/', async function (req, res, next) {
    const { url } = req.query;
    try {
        
        analyze.getAnalyze(url).then(data => {
          console.log(data)
          res.send(data);
        })
      
    } catch (err) {
        console.error(`Error while getting data `, err.message);
        next(err);
    }
});
module.exports = router;