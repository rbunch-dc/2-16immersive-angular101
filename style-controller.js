var angularStyle = angular.module('angularStyle', []);
angularStyle.controller('styleController', function ($scope){ //$http, $cookies, $roues, $compile...

	$scope.myColor = 'blue';


	var Student = function(name, formerly){
		{
			this.name = name;
			this.former = formerly;
		}
	}

	$scope.items = [];

	$scope.items.push(new Student('Tristan', 'Stock Guy'));
	$scope.items.push(new Student('Joshua', 'iOS student'));
	$scope.items.push(new Student('Bogdan', 'Mechanic'));
	$scope.items.push(new Student('Lazlo', 'KGB'));
	$scope.items.push(new Student('Keith', 'Geologist'));
	$scope.items.push(new Student('Will', 'Skiing Ninja'));
	$scope.items.push(new Student('Curtis', 'IT Master'));
	$scope.items.push(new Student('Joe', 'The Controller'));
	$scope.items.push(new Student('Kochan', 'Demon Deacon'));
	$scope.items.push(new Student('Patrick', 'Outlaw'));
	$scope.items.push(new Student('Jonathan', 'Boring Linguist'));
	$scope.items.push(new Student('Jeremy', 'Magnum PI'));


	$scope.understand = function(){
		$scope.understandYes = 1;
	}

});