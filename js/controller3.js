//モジュールの定義
var myApp = angular.module('mySimpleApp',[]);
//コントローラーの定義
myApp.controller('MySimpleController', function() {
    this.message = 'initial message';
    this.greet = function() {
        this.message = 'hello!!';
    };
});
