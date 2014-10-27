//this is the controller for the node server only ojo!!!

//define our meetup model
var Meetup = require('../models/meetup');


module.exports.create = function(req, res){
	//console.log(req.body);
	var meetup = new Meetup(req.body);
	meetup.save(function(err, result){
		res.json(result);
	});
};