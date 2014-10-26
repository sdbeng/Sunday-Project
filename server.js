var express = require('express'),
	app = express();

app.get('/', function(req, res){
	res.sendFile(__dirname + '/client/views/index.html');
});
//shortcut to not include client path in index view
app.use('/js', express.static(__dirname + 'client/js'));

app.listen(3013, function(){
	console.log('I am listening on port 3013...');
});