require('@risingstack/trace');

const express = require('express');
const app = express();

app.set('port', (process.env.PORT || 3000));

app.get('/', function (req, res) {
    res.json({"quiz": "time"});
});

app.get('/dashbanner', function (req, res) {
    res.json({
        "title": "Sale: 50% Off (Limited Time)",
        "message": "For limited time, get Quiz Time: Pro for 50% off regular price, i.e. only $0.99!\n\n" +
        "Quiz Time: Pro features:\n" +
        "• 30000 more unique questions\n" +
        "• 4 more game modes\n" +
        "• 11 more exciting topics\n" +
        "• No advertisements\n" +
        "• Support a small developer! :)",
        "pos": "Get Pro",
        "show": "True",
        "version": "1",
        "days": 5
    });
});

app.listen((process.env.PORT || 3000), function () {
    console.log('Example app listening on port 3000!')
});