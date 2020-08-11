const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')
const bookingController = require('./controller/bookController');
const requestLogger = require('./middleware/requestLogger');
const errorLogger = require('./middleware/errorLogger');
const port = 3002; 

//set view engine
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.get('/', function (req, res) {
    res.render('index.html');
});
//end the view
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(bodyParser.json());

//log all the requests in requestLogger.txt
app.use(requestLogger);
//end

//routing handling middleware
app.use('/book/',bookingController);
//end

//log all the errors in errorLogger.txt
app.use(errorLogger);
//end

app.listen(port,()=>{
    console.log(`listing on port ${port}`);
});