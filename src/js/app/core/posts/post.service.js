'use strict';
/** This is a custom service that provides a way to access to a restfull 
 * resource no matter where it is (remote or local) efficiently.
 *  
 * This service provides an access to a local JSON vía $resource:
 * 
 * $resource is a factory which creates a resource object that lets 
 * you interact with RESTful server-side data sources.
 * The returned resource object has action methods which provide high-level 
 * behaviors without the need to interact with the low level $http service.
*/
angular.module('post')
  .factory('Post', function ($resource) {
    let url = '/json/blogPosts.json';

    return $resource(url, {}, {
      // These functions maps the API
      query: {
        method: "GET",
        params: {},
        isArray: true,
        cache: true,
        // transformResponse
        // interceptor
      },
      get: {
        method: "GET",
        // params: {},
        isArray: true,
        cache: true,
      }
    })
  })
