'use strict';

// Enumerates the main app and all the modules contained in
angular.module('try', [
  // External resources, 3rd party elements
  'ngResource',
  'ngRoute',

  // Internal components
  'siteNav',
  'firstPage',
  'counter',
  'blogList',
  'blogEntry',
  'confirmClick',
]);