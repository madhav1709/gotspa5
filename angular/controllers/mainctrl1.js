
// main controller for load view using inbuilt directives($http and $scope) and apiservice

app.controller('mainController', ['$http', 'apiService','$scope', function ($http, apiService,$scope) { 


var main = this; //create a context
this.BooksList = []; // array to store list of books
this.characters = []; // array  to store list of characters
this.houses = [];    // array to store list of houses
this.showbooks = 0; // initialized to zero or false(hide)
this.showhouses = 0; // initialized to zero or false(hide)
this.showcharacters = 0;// initialized to zero or false(hide)
this.pagesize = 50; // size(initialize according to your will)
this.housepagesize = 50; // size(initialize according to your will)

this.ShowBooks = function() {                // function for showing and hiding list of books.
    main.showbooks = main.showbooks ? 0 : 1;
    main.showhouses = 0;
    main.showcharacters = 0;
  };
  this.ShowCharacters = function() {           // function for showing and hiding list of characters.
    main.showcharacters = main.showcharacters ? 0 : 1;
    main.showbooks = 0;
    main.showhouses = 0;

  };
this.ShowHouses = function() {                 // function for showing and hiding list of houses.
    main.showhouses = main.showhouses ? 0 : 1;
    main.showbooks = 0;
    main.showcharacters = 0;

  };
  

this.loadBooks = function() { // function to load list of books using api service
    apiService.loadallBooks().then(function successCallback(response) {
            console.log(response.data);
                main.BooksList = response.data;
                main.book.push(main.BooksList[i]);
            },
      
      function errorCallback(response) {                     // called asynchronously if an error occurs
       alert("some error occurred. Check the console.");     // or server returns response with an error status.
        console.log(response);
      });
    

  } // End of function

main.loadBooks(); // End of list of books

$scope.BookDetail = function(value) 
    {
      console.log(value);
        $http({
            method: 'GET',
            url: value
        }).then(function successCallback(response) {
                // data of books
                // using $scope
                console.log(response.data);
                $scope.authors =  response.data.authors;
                $scope.totalchar = response.data.characters.length;
                $scope.country =  response.data.country;
                $scope.isbn =  response.data.isbn;
                $scope.media =  response.data.mediaType;
                $scope.Name = response.data.name;
                $scope.Pages =  response.data.numberOfPages;
                $scope.povchar = response.data.povCharacters;
                $scope.Publishers =  response.data.publisher;
                $scope.releasedDate =  response.data.released;
                $scope.url = response.data.url;
                console.log("madhav");
            },
            function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                alert("some error occurred. Check the console.");
                console.log(response);

            });
    }


this.loadCharacters = function() {              // function to load list of characters using api service
    for (var i = 1; i < main.pagesize; i++) {
      apiService.loadallCharacters([i]).then(function successCallback(response) {
         main.characters.push.apply(main.characters, response.data);
         console.log(response);
        },
        function errorCallback(response) {
          alert("some error occurred. Check the console.");
          console.log(response);
        });
    } 
  }; // end of function
  main.loadCharacters(); // end of list of characters
    

    $scope.myCharsFunction = function(value)
    {
      console.log(value);
        $http({
            method: 'GET',
            url: value
        }).then(function successCallback(response) {
                // this callback will be called asynchronously
                console.log(response.data);
                $scope.url = response.data.url;      // data of books
                                                    // using $scope
                $scope.name = response.data.name;
                $scope.culture = response.culture;
                $scope.gender = response.data.gender;
                $scope.born = response.data.born;
                $scope.bornDate = response.data.born.length;
                $scope.title = response.data.titles[0];
                $scope.aliases = response.data.aliases[0];
                $scope.father = response.data.father;
                $scope.mother = response.data.mother;
                $scope.spouse = response.data.spouse;
                $scope.books = response.data.books[0];
                $scope.tvseries = response.data.tvSeries[length];
             console.log("madhav menon")

            },
            function errorCallback(response) {
                // called asynchronously if an error occurs or server returns response with an error status.
                alert("some error occurred. Check the console.");
                console.log(response);

            });
    }// end 

this.getHousesFucntion = function() {         // function to load list of houses using api service
    for (var i = 1; i < main.housepagesize; i++) {
      apiService.getHouses([i]).then(function successCallback(response) {
        main.houses.push.apply(main.houses, response.data);
         },
        function errorCallback(response) {
          alert("some error occurred. Check the console.");
          console.log(response);
        });
    } 
  }; //end of function
  main.getHousesFucntion();

$scope.myHouseFunction = function(name)
    {
      console.log(name);
        $http({
            method: 'GET',
            url: name
        }).then(function successCallback(response) {
                console.log(response.data);
                $scope.HouseName = response.data.name;
                $scope.Words =  response.data.words;
                $scope.Seats =  response.data.seats[0];
                $scope.Region =  response.data.region;
                $scope.CoatofArms =  response.data.coatOfArms;
                $scope.founded =  response.data.founded;
                $scope.heirs =  response.data.heir;
                console.log("Madhav");

            },
            function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                alert("some error occurred. Check the console.");
                console.log(response);

            });
    }





    }]);