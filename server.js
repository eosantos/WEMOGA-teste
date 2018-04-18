var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

app.use(cors());

app.engine('html', require('ejs').renderFile);
app.set('views', __dirname);
app.set('view engine', 'html');

app.use('/', express.static(path.join(__dirname, '/')));
app.use('/controller', express.static(path.join(__dirname, '/controller')));
app.use('/images', express.static(path.join(__dirname, '/images')));
app.use('/dummy', express.static(path.join(__dirname, '/dummy')));
app.use('/fonts', express.static(path.join(__dirname, '/fonts')));
app.use('/js', express.static(path.join(__dirname, '/js')));
app.use('/sass', express.static(path.join(__dirname, '/sass')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res) {
  res.render('index.html');
});

var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('Server online (Port: '+ port + ')');
});
