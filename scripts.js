var myApp = angular.module('myApp', []);
// console.log(myApp);
myApp.controller('myController', function($scope){

	$scope.cities = [
		{
			name: "Atlanta",
			population: 500000
		},
		{
			name: "Houston",
			population: 2200000
		},
		{
			name: "Portland",
			population: 610000
		}
	]

	$scope.addStudent = function(){
		$scope.dcClass.push($scope.newStudent);
		$scope.newStudent = '';
	}

	$scope.removeStudent = function(i){
		$scope.dcClass.splice(i,1);
		// console.log(name);
	}

});