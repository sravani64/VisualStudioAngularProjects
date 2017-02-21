//var emp = angular.module('emp', []);
//var technology = angular.module('technology', []);
//var app = angular.module('myapp', ['emp', 'technology']);
var myapp = angular.module('myapp', ['ngRoute']);
myapp.run(function ($rootScope, $templateCache) {
    $rootScope.$on('$viewContentLoaded', function () {
        $templateCache.removeAll();
    });
});
myapp.config(function ($routeProvider) {
    $routeProvider
      .when('/home', {
          templateUrl: 'home.html',
          controller: 'employeeController'
      })
        .when('/about', {
            templateUrl: 'about.html',
            controller: 'aboutController'
        })
        .when('/technology', {
            templateUrl: 'Tecnology.html',
            controller: 'technologyController'
        })
        .when('/employee', {
            templateUrl: 'employeeTable.html',
            controller: 'employeeController'
        })
      .when('/login', {
          templateUrl: 'login.html',
          controller: 'loginController'
      })
      .otherwise({ redirectTo: '/login' });
});
myapp.controller("aboutController", function ($scope, $location, $rootScope, $anchorScroll) {
    $scope.scrollTo = function (scrollLocation) {
        $location.hash(scrollLocation);
        $anchorScroll.yOffset = 60;
        $anchorScroll();

    }
    // $scope.message = "ABout Sravani reddy talakanti"
    $scope.aboutView = "employee.html";
    $scope.goto = function (page) {

        if (page == 'home') {
            $location.path("/home");
        } else
            if (page == 'about') {
                $location.path('/about');
            }
            else if (page == 'technology') {
                $location.path('/technology');
            }

            else if (page == 'employee') {
                $location.path("/employee");
            }
            else if (page == 'login') {
                $location.path("/login");
            }
    }
});
myapp.controller("employeeController", function ($scope, $rootScope, $location) {

    var employees = [
        { name: "sravani", dob: new Date("jan 16 1986"), gender: "Female", salary: 30000, technology: "Java", likes: 0, dislikes: 0 },
        { name: "sravanthi", dob: new Date("oct 11 1988"), gender: "Female", salary: 89000, technology: "C", likes: 0, dislikes: 0 },
        { name: "aarush", dob: new Date("nov 29 2010"), gender: "Male", salary: 67000, technology: "IOS", likes: 0, dislikes: 0 },
        { name: "lali", dob: new Date("jan 16 1986"), gender: "Female", salary: 78000, technology: "Android", likes: 0, dislikes: 0 },
        { name: "kalyan", dob: new Date("oct 11 1988"), gender: "male", salary: 65000, technology: "Salesforce", likes: 0, dislikes: 0 },
        { name: "ravi", dob: new Date("nov 29 2010"), gender: "Male", salary: 23000, technology: "Phython", likes: 0, dislikes: 0 }
    ];
    $scope.employees = employees;
    $scope.rowLimit = 5;
    $scope.sortColumn = "name";
    $scope.incrementLikes = function (employee) {
        employee.likes++;
    }
    $scope.decrementDisLikes = function (employee) {
        employee.dislikes++;
    }
    $scope.search = function (item) {
        if ($scope.searchtext == undefined) {
            return true;
        } else {
            if (item.name.tolowercase().indexof($scope.searchtext, tolowercase()) != -1 || (item.gender.tolowercase().indexof($scope.searchtext, tolowertext())) != -1
                || (item.technology.tolowercase().indexof($scope.searchtext, tolowercase()) != -1)) {
                return true;
            }

            return false;
        }
    }

    $scope.goto = function (page) {
        if (page == 'home') {
            $location.path("/home");
        } else
            if (page == 'about') {
                $location.path('/about');
            }
            else if (page == 'technology') {
                $location.path('/technology');
            }
            else if (page == 'employee') {
                $location.path("/employee");
            }
            else if (page == 'login') {
                $location.path("/login");
            }
    }
});

myapp.controller("loginController",['$scope', function ($scope, $location, $rootScope, $http, $log) {
    $scope.message = "This is message";
    $http.get("https://jsonplaceholder.typicode.com/posts").then(success, Error);

    function success(response) {
        console.log(response.data);
        $scope.posts = response.data;
    }
    function Error(error) {
        console.log("Error Occurred");
    }
    $scope.submit = function () {
        if ($scope.usn == "aa" && $scope.pwd == "aa") {
            $rootScope.UserName = $scope.usn;
            $location.path("/home");
        }
        else {
            $scope.message = "Invalid Login Credentials";
        }
    };
}]);
myapp.directive("myInfoMsg", function () {
    return {
        templateUrl: "my_info_msg.html"
        //template: "<strong>{{msg}}</strong>"
    };
});
myapp.controller("technologyController", function ($scope, $rootScope, $location,$http) {
    var technologies = [
        { name: "Java", likes: 0, dislikes: 0 },
        { name: "C", likes: 0, dislikes: 0 },
        { name: "IOS", like: 0, dislikes: 0 },
        { name: "Android", likes: 0, dislikes: 0 },
        { name: "Salesforce", likes: 0, dislikes: 0 }
    ];
    $scope.technologies = technologies;

    $scope.incrementLikes = function (technology) {
        technology.likes++;
    }
    $scope.decrementDisLikes = function (technology) {
        technology.dislikes++;
    }

    $scope.goto = function (page) {
        if (page == 'home') {
            $location.path("/home");
        } else
            if (page == 'about') {
                $location.path('/about');
            }
            else if (page == 'technology') {
                $location.path('/technology');
            }

            else if (page == 'employee') {
                $location.path("/employee");
            }
            else if (page == 'login') {
                $location.path("/login");
            }
    }
});