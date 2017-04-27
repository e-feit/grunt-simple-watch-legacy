module.exports = function(grunt) {

	grunt.initConfig({
		test: {
			files: ['test/**/*.js']
		},

		watch: {
			files: '<config:lint.files>',
			tasks: 'default'
		},

		jshint: {
			options: {
				asi: true,
				curly: true,
				eqeqeq: true,
				immed: true,
				latedef: true,
				newcap: true,
				noarg: true,
				sub: true,
				undef: true,
				boss: true,
				eqnull: true,
				node: true,
				es5: true
			},

			files: ['grunt.js', 'tasks/**/*.js', 'test/**/*.js'],

			globals: {}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-nodeunit');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['jshint','watch']);

};
