'use strict';

angular.module('yoAngularTestApp')
  .controller('MainCtrl', function ($scope) {
    $scope.randomStrings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.text = "Hello World";
  });
