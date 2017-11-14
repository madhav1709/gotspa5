// var app = angular.module('myApp', ['ngRoute']);

app.directive('myBooks', function () {
    return {
        restrict : "EA",    // can use <my-html></my-html> or <div my-html></div> in the html
        templateUrl: 'views/myBooks.html' // redirect to template Url

    }
});

app.directive('myChars', function () { 
    return {
        restrict : "EA",                    // can use <my-html></my-html> or <div my-html></div> in the html
        templateUrl: 'views/myChars.html'   // redirect to template Url
        
    }
});
app.directive('myHouses', function () {
    return {
        restrict : "EA",                     // can use <my-html></my-html> or <div my-html></div> in the html
        templateUrl: 'views/myHouses.html'   // redirect to template Url
    }
});
