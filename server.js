var express = require('express'),
	app = express()
	meetupsController = require('./server/controllers/meetups-controller-node')
	mongoose = require('mongoose');

app.use(require('body-parser')());//to avoid the undefined output in the server

mongoose.connect('mongodb://localhost:27017/mean-demo');

app.get('/', function(req, res){
	res.sendFile(__dirname + '/client/views/index.html');
});
//shortcut to not include client path in index view
app.use('/js', express.static(__dirname + '/client/js'));

//define post route bypassing the meetupsController here to simplify & be clear
app.post('/api/meetups', meetupsController.create);

app.listen(3013, function(){
	console.log('I am listening on port 3013...');
});