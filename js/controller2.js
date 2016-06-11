//モジュールの定義
var myApp = angular.module('mySimpleApp',[]);
//コントローラーの定義
myApp.controller('MySimpleController', ['$scope', function($scope) {
    $scope.message = 'initial message';
    $scope.greet = function() {
        $scope.message = 'hello!';
    };
}]);
