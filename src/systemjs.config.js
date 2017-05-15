/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function(global) {
  // map tells the System loader where to look for things
  var map = {
		'app':                      						'src',
    '@angular':                   					'node_modules/@angular',
    'rxjs':                       					'node_modules/rxjs',
		'papaparse': 														'node_modules/papaparse',
		'ngx-bootstrap': 												'node_modules/ngx-bootstrap',
		'ng2-file-upload':											'node_modules/ng2-file-upload',
		'angular2-jwt':													'node_modules/angular2-jwt',
		'moment': 															'node_modules/moment',
		'@angular/animations': 									'node_modules/@angular/animations/bundles/animations.umd.min.js',
		'@angular/animations/browser':					'node_modules/@angular/animations/bundles/animations-browser.umd.js',
		'@angular/platform-browser/animations': 'node_modules/@angular/platform-browser/bundles/platform-browser-animations.umd.js'
  };
  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                      					  { main: 'index.js',  defaultExtension: 'js' },
    'rxjs':                     					  { defaultExtension: 'js' },
		'ngx-bootstrap':            					  { format: 'cjs', main: 'bundles/ngx-bootstrap.umd.js', defaultExtension: 'js' },
		'ng2-file-upload':          					  { format: 'cjs', main: 'bundles/ng2-file-upload.umd.js', defaultExtension: 'js' },
		'angular2-jwt':     	      					  { defaultExtension: 'js', main: "angular2-jwt.js"},
		'moment': 															{ defaultExtension: 'js', main: 'moment.js'}		
  };
  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'forms',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'router-deprecated',
    'upgrade',
  ];
  // Individual files (~300 requests):
  function packIndex(pkgName) {
    packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
  }
  // Bundled (~40 requests):
  function packUmd(pkgName) {
    packages['@angular/'+pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
  }
  // Most environments should use UMD; some (Karma) need the individual index files
  var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
  // Add package entries for angular packages
  ngPackageNames.forEach(setPackageConfig);
  var config = {
    map: map,
    packages: packages
  };
  System.config(config);
})(this);