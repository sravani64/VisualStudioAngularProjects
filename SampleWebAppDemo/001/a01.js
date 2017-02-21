
var myapp = angular.module('myapp', []);
myapp.controller(emp, ['$scope', 'countryService', function ($scope) {

    $scope.message = "This is a message";
    $scope.doSearch = function () {
        countryService.findCountryById($scope.searchCode,function(r){
            $scope.countryCode = r.code;
            $scope.name = r.name;
            $scope.population = r.population;

        });
    
    };
}]);
myapp.directive('empDetails', function () {

    return {
        templateUrl: "emp-details.html"
    }
});

//myapp.directive('myInfoMsg', function () {

//    return {
//        templateUrl:"my-info-msg.html"
//    };
//});
myapp.service("countryService",['$http','$log' ,function ($scope, $location, $rootScope, $http, $log) {
    $scope.message = "This is message";
    $http.get("https://jsonplaceholder.typicode.com/posts").then(success, Error);

    function success(response) {
        console.log(response.data);
        $scope.posts = response.data;
    }
    function Error(error) {
        console.log("Error Occurred");
    }
}]);