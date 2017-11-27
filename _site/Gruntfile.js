module.exports = function(grunt){

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({

		watch: {

			scss: {       
				files: 'components/scss/style.scss',       
				tasks: ['sass','autoprefixer']     
		  } //scss
		},// watch


		sass: {
			options: {
				sourceMap: true
			},
			dist: {
				files: {
					'css/style.css': 'components/scss/style.scss'
				}
			}
		},

		autoprefixer: {

			options:{
				browsers: ['last 2 version','ie 9']
			},

			single_file: {
				src: 'css/style.css'
			}

		}//autoprefixer

		// browserSync: {

		//   dev: {

		//     bsFiles: {
		//       src : [
		//         'sassGirlsSite/css/*.css',
		//         'sassGirlsSite/assets/**/*.jpg',
		//         'sassGirlsSite/assets/**/*.png',
		//         'sassGirlsSite/assets/**/*.svg',
		//         'sassGirlsSite/js/**/*.js',
		//         // '**/*.php',
		//         '**/*.html'
		//         ]
		//       },

		//     options: {
		//         watchTask: true,
		//         debugInfo: true,
		//         logConnections: true,
		//         notify: true,
		//         proxy: "proyecto.dev:8888",
		//         ghostMode: {
		//           scroll: true,
		//           links: true,
		//           forms: true
		//         }

		//     }

		//   } //dev

		// } // browserSync

    });//initConfig
	
	grunt.loadNpmTasks('grunt-contrib-watch');
	// grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-autoprefixer');
	// grunt.loadNpmTasks('grunt-browser-sync');

	grunt.registerTask('default', ['watch']);
};