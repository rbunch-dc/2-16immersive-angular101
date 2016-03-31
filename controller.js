var myApp = angular.module('myApp',[]);
myApp.controller('myController', function($scope, $http){

	$scope.countries = countries;

	$scope.addCountry = function(){
		$scope.tempID = 'test div';
		$scope.message = 'Your coutnry was added!!';

		// $scope.countryName = 'I changed you!!';
		$scope.countries.push(
			{
				name: $scope.countryName,
				population: $scope.population,
				president: $scope.president,
				src: $scope.flag
			}
		)
	}


	$scope.removeCountry = function(i){
		$scope.message = $scope.countries[i].name + ' was removed!!';
		$scope.countries.splice(i,1);
		$scope.tempID = 'test div';

	}


});