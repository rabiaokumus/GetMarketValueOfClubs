var express = require('express');
var fs      = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();

app.get('/TR1', function(req, res){
  url = 'http://www.transfermarkt.com/super-lig/startseite/wettbewerb/TR1';

  request(
    {
      uri :url
    }, function(error, response, html){

      var $ = cheerio.load(html);

     $('#yw1 td').each(function(i, element){
            var a = $(this).prev();
            console.log(a.text());
          });

      res.send(html)
  })
})

app.listen(8000, function() {
  console.log("listening on port 8000");
});

exports = module.exports = app;
