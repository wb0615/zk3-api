var express = require('express');
var router = express.Router();
var query = require('../mysql/index.js')

/* GET home page. */
router.get('/get/all', function(req, res, next) {
    query('select * from zk3', function(err, result) {
        if (err) {
            res.json({ code: 0, msg: err })
        } else {
            res.json({ code: 1, msg: result })
        }
    })
});

router.get('/get/train_tickets', function(req, res, next) {
    var date = req.query.date;
    query('select * from zk3 where date_time=?', [date], function(err, result) {
        if (err) {
            res.json({ code: 0, msg: err })
        } else {
            res.json({ code: 1, msg: result })
        }
    })
});

module.exports = router;