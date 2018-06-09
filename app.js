
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

mongoose.connect('mongodb://admin:quiztimeuser101@ds153890.mlab.com:53890/quiztime');

const WrongAnswer = mongoose.model('WrongAnswer', { 
    id: String,
    question: String,
    currentAnswer: String,
    suggestedAnswer: String
});

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

app.get('/factual', function (req, res) {
    res.json({
        "title": "Factual Quiz",
        "message": "Please check out my exciting new trivia game 'Factual Quiz'",
        "show": "True",
        "version": "1",
        "days": 7
    });
});

app.post('/reportWrongAnswer', function(req, res) {
    const wa = new WrongAnswer(req.body);
    wa.save().then(() => res.json({"response": "Saved!"}));
});


app.listen((process.env.PORT || 3000), function () {
    console.log('Example app listening on port 3000!')
});