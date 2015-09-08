ulapp.controller('productsctrl',['$scope', '$http',function($scope, $http){

        //Products
        $http.get('http://ec2-52-21-169-186.compute-1.amazonaws.com:8080/api/productslist').
        success(function(data, status, headers, config) {
          $scope.products = data;

        }).
        error(function(data, status, headers, config) {
          // log error
        });

        //Product Groups
        $http.get('http://ec2-52-21-169-186.compute-1.amazonaws.com:8080/api/productgroups').
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