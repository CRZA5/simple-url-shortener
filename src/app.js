const express = require("express");
const app = express();
// get "/path" so to direct example.com/test use app.get('/test')
app.get("/", function (req, res) {
  //add your redirect url in place of example .com
  res.redirect(301, "http://example.com");
});
/* you can copy 
  app.get('/', function (req, res) {
    //add your redirect url in place of example .com
    res.redirect(301, 'http://example.com')
  }) 
  to shorten multiple urls
  */
app.listen(3000, () =>
  console.log(`Now listening to requests on port ${PORT}`)
);
