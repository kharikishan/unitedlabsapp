ulapp.controller('productsctrl',['$scope', '$http',function($scope, $http){

        //Products
        $http.get('http://192.168.2.46:8080/api/productslist').
        success(function(data, status, headers, config) {
          $scope.products = data;

        }).
        error(function(data, status, headers, config) {
          // log error
        });

        //Product Groups
        $http.get('http://192.168.2.46:8080/api/productgroups').
        success(function(data, status, headers, config) {
          $scope.productgroups = data;

        }).
        error(function(data, status, headers, config) {
          // log error
        });    
   
    $scope.clearfilter = function(){
        $scope.searchText = "";
        $scope.selectedGroup = "";
    };
}]);