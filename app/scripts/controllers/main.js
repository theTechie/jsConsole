'use strict';

/**
 * @ngdoc function
 * @name jsConsoleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jsConsoleApp
 */
angular.module('jsConsoleApp')
    .controller('MainCtrl', function ($scope) {
        $scope.command = '';

        $scope.commandHistory = [];

        // pretty print JavaScript object
        function prettyPrint(obj) {
            var output = '';

            for (var o in obj) {
                if (typeof o === "string")
                    output += o + ' : ' + obj[o] + ', <br/>';
                else
                    output += o + ': { <br/>' + prettyPrint(obj[o]) + '}';
            }

            return output;
        }

        // on change in command
        $scope.onCommandChange = function () {
            var output = '';

            try {
                output = eval($scope.command);

                if (output == undefined)
                    $scope.commandHistory.unshift($scope.command + " is not defined");
                else if (typeof output === "object") {
                    $scope.commandHistory.unshift(prettyPrint(output));
                } else if (typeof output === "function") {
                    $scope.commandHistory.unshift(output.toString());
                } else {
                    $scope.commandHistory.unshift(output.toString());
                }
            } catch (e) {
                output = e.message;
                $scope.commandHistory.unshift(output.toString());
            }
        };
    });