/*
	Referências
	https://medium.com/gummaoficial/compilando-sass-com-gulp-ed1e5f9ed417
*/

"use strict";

const gulp 		= require("gulp");
const sass 		= require("gulp-sass");
const concat 	= require('gulp-concat');

const publicStaticDir = 'public/static/';
const publicCssDir = publicStaticDir + 'css/';


sass.compiler = require("node-sass");

gulp.task('sass', compilarSass);
gulp.task('default', watch);


// compila o scss para css
function compilarSass() {
	console.log('compilando sass...')
	return gulp
			.src("src/scss/**/*.scss")
			.pipe( sass().on('error', sass.logError) )
			// .pipe( sass({outputStyle: 'compressed'}).on('error', sass.logError) ) // minificado
			.pipe(gulp.dest( publicCssDir ));
}


// Observa as mudanças nos arquivos e executa as tarefas
function watch() {

	// ao iniciar executa estas funções
	compilarSass();

	gulp.watch("src/scss/**/*", compilarSass );

    console.log('Observando...');
}