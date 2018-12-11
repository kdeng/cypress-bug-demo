/* global window:true */
// LEGACY MODULES
import jquery from 'jquery';

// ADD JQUERY MIGRATE, WITHOUT LOGGING FOR PRODUCTION
import JQUERYMIGRATE; // replaced by rollup, with logging or no logging for production

// make sure jquery is available for legacy code
window.$ = jquery;
window.jQuery = jquery;
