//this is our model to work with mongoose
var mongoose = require('mongoose');
//define schema very simple here
module.exports = mongoose.model('Meetup', {
	name: String
});