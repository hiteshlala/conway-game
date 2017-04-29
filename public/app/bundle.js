'use strict';
const browserify = require( 'browserify' );
const fs = require( 'fs' );
const path = require( 'path' );

const outfile = path.join( __dirname, 'main.js' );
const srcfile = path.join( __dirname, 'pack.js' );

const out = fs.createWriteStream( outfile );

browserify()
.add( srcfile )
.bundle()
.pipe( out );