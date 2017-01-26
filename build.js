var NwBuilder = require('nw-builder');
var nw = new NwBuilder({
    files: './build/**/**', // use the glob format
    buildDir: './release',
//    platforms: ['osx64', 'win32', 'win64','linux64'],
    platforms: ['win32','linux32','linux64'],
    version: '0.14.6'
});

//Log stuff you want

nw.on('log',  console.log);

// Build returns a promise
nw.build().then(function () {
   console.log('all done!');
}).catch(function (error) {
    console.error(error);
});