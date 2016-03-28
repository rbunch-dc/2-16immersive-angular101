var myApp = angular.module('myApp', []);
// console.log(myApp);
myApp.controller('myController', function($scope){

	// $scope.first = "Rob";
	// $scope.last = "Bunch";

	$scope.dcClass = ['Tristan','Josh','Bogden','Lazlo','Keith','Will','Curtis','Joe','Kochan','Patrick','Jonathan','Jeremy'];

	$scope.addStudent = function(){
		$scope.dcClass.push($scope.newStudent);
		$scope.newStudent = '';
	}

	$scope.removeStudent = function(name){
		console.log(name);
	}

});