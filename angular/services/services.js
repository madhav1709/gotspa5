
app.service('apiService', function apiLoad($http) {

  var baseUrl = 'https://anapioficeandfire.com/api';
  var apiLoad = {};

  apiLoad.loadallBooks = function() {
    return $http.get(baseUrl + '/books?page=1&pageSize=50');
  }

  apiLoad.loadallCharacters = function(size) {
    return $http.get(baseUrl + '/characters?page='+size+'&pageSize=50')
  }
  apiLoad.getHouses = function(size1) {
    return $http.get(baseUrl + '/houses?page='+size1+'&pageSize=50')

  }
 return apiLoad;

});