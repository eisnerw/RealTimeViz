var express = require('express');
var fs = require("fs");
var router = express.Router();

/*
 * GET userlist.
 */
router.get('/currentvalue', function(req, res) {
    
    fs.readFile('./sampledata/currentvalue.json', 'utf8', function (err,data) {
        if (err) {
            return console.log(err);
        }
        var jsonRep = JSON.parse(data);
        
        for (var i = 0, len = jsonRep.length; i < len; ++i) {
            var dataItem = jsonRep[i];
            dataItem.plot0 = new Date();
            dataItem.plot1 = new Date();
        }
 
 
        res.json(jsonRep);
    });
});

/*
 * GET userlist.
 */
router.get('/abc', function(req, res) {
    
    fs.readFile('./sampledata/currentvalue.json', 'utf8', function (err,data) {
        if (err) {
            return console.log(err);
        }
        var jsonRep = JSON.parse(data);
        
        for (var i = 0, len = jsonRep.length; i < len; ++i) {
            var dataItem = jsonRep[i];
            dataItem.plot0 = new Date();
            dataItem.plot1 = new Date();
        }
 
 
        res.json(jsonRep);
    });
});


/*
 * GET userlist.
 */
router.get('/abcd:pa', function(req, res) {
    
        var pa = req.params.pa;
        console.log(pa);
        var request = require('request');
        
        
        
        request('http://www.google.com', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            //console.log(body) // Show the HTML for the Google homepage.
        }
        
        var resData = {abcd: "test"}
        res.json(resData);
    })
});

module.exports = router;
