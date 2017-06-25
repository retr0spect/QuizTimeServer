const express = require('express')
const app = express()

app.set('port', (process.env.PORT || 3000));

app.get('/', function (req, res) {
  res.json({"foo": "bar"});
})

app.get('/dashbanner', function (req, res) {
  res.json({"title": "Title", "message": "Message", "pos": "Positive Button"});
})

app.listen((process.env.PORT || 3000), function () {
  console.log('Example app listening on port 3000!')
})