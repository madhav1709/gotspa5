app.config(['$routeProvider', function ($routeProvider) {
    'use strict';
    $routeProvider
        
       .when('/', {
            template: '<h2 style="color:white;text-align:center;">click the button to know more.....</h2>'
        })
        .when('/page-top', {
            template: ''
        })
         
        .when('/load',{
            templateUrl: 'views/load.html', //first template to be loaded.
            controller: 'mainController',
            controllerAs: 'main'
  
        })
        .when('/books',{
            templateUrl: 'views/load.html',  //location of template to be loaded.
            controller: 'mainController',    //controller to be used.
            controllerAs: 'main'             //controller name for convenience.

  
        })
        .when('/characters',{
            templateUrl: 'views/load.html',
            controller: 'mainController',
            controllerAs: 'main'       
  
        })
        
       
        .when('/houses', {
            
            templateUrl: 'views/load.html',
            controller: 'mainController',
            controllerAs: 'main'

        })
    
        .otherwise({
            template: '<h2 style="color:white;text-align:center;">Error :404 page not found it is not a number its something....</h2>'
        });
}]);
