const express = require('express');
const app = express();

app.set('port', (process.env.PORT || 3000));

app.get('/', function (req, res) {
    res.json({"foo": "bar"});
});

app.get('/dashbanner', function (req, res) {
    res.json({
        "title": "Sale: 50% Off (Limited Time)",
        "message": "For limited time get the Quiz Time: Pro for 50% off regular price, i.e. only $0.5. Quiz Time: Pro features: \n" +
        "- 30000 more unique questions. (Free version has 7500 only Questions) \n" +
        "- 4 more game modes (Multi Topics, Millionaire, Non-Stop, 3-Difficulty +\n" +
        "- Questions from 11 more exciting Topic! +\n" +
        "- No Advertisements \n" +
        "- Support a small developer pay his bills. :)",
        "pos": "Get Pro",
        "show": "True",
        "version": "1"
    });
});

app.listen((process.env.PORT || 3000), function () {
    console.log('Example app listening on port 3000!')
});