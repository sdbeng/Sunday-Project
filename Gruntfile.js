module.exports = function(grunt) {
	//Project configuration.
	grunt.initConfig(grunt.file.readJSON("config.json"));

	grunt.registerTask("default", 'Log some hello message', function(){
		grunt.log.write("Sup " + grunt.config.get("sdbadmin").firstName + ", don't forget to commit your code today! ").ok();
	})
}