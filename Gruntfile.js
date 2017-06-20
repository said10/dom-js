
module.exports = function(grunt) {
  require("load-grunt-tasks")(grunt);
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
	babel: {
	    options: {
	      sourceMap: true,
		  compact : false,
		  presets: ['babel-preset-es2015']
	    },
	    dist: {
	      files: {
	        "src/dom.babel.js": "src/dom.js"
	      }
	    }
	}, 
	jshint: {
    	all: ['src/dom.js'],
		options : {
			jshintrc: '.jshintrc',
	        ignores: [],
	        additionalSuffixes: ['.js']
		}
	},
	uglify: {
		my_target: {
		  files: {
			'dist/dom.min.js': ['src/dom.babel.js']
		  }
		}
	},
	jsdoc : {
        dist : {
            src: ['src/dom.js'],
            options: {
                destination: 'doc'
            }
        }
    },
	  watch: {
		  scripts: {
		    files: ['src/dom.js'],
		    tasks: ['jshint', 'babel', 'uglify', 'jsdoc'],
		    options: {
		      spawn: false,
		    },
		 },
	},
	
	
	
  });
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['watch'], ['test']);
  grunt.registerTask('dev', ['concat', 'jshint', 'babel' , 'uglify', 'jsdoc']);

};