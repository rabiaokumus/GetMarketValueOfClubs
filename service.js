var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();
var router = express.Router();


app.set('port', (process.env.PORT || 5000));

app.get('/', function(req, res){
  console.log("router.TR1 entered");
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

app.listen(app.get('port') , function() {
  console.log("listening on port " + app.get('port'));

});

exports = module.exports = app;
