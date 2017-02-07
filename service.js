var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();
var router = express.Router();
var result = [];

app.set('port', (process.env.PORT || 8000));

app.get('/', function(req, res){
  url = 'http://www.transfermarkt.com/super-lig/startseite/wettbewerb/TR1';

  request(
    {
      uri :url
    }, function(error, response, html){

     var $ = cheerio.load(html);
     $('#yw1 tr').each(function(i, element){
              var a = $(this).prev();

              /* $(this).find('td').each (function() {
                  attrs.push({ "attr": i});
              });*/

              result.push({ "id": i, "txt" : a.text()});
              console.log(a.text());            
          });

      res.contentType('application/json');
      res.send(JSON.stringify(result));
      //res.send(html)
  })
})

app.listen(app.get('port') , function() {
  console.log("listening on port " + app.get('port'));
});

exports = module.exports = app;
