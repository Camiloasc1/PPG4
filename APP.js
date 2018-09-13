"use strict";
var app = angular.module('PPG4-App', []);
app.controller('PPG4-Controller', ['$scope', function ($scope) {
    $scope.plaintext = "";
    $scope.ciphertext = "";

    $scope.$watch('plaintext', function () {
        $scope.ciphertext = $scope.Hash($scope.plaintext);
    });

    $scope.Hash = function (plaintext) {
        return PPG4(plaintext);
    };
}]);
