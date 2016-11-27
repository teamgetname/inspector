angular.module("inspector").controller("controller", function($scope, $http, inDataAPI) {
	$scope.appName = "Inspector";
	$scope.data = [];
	$scope.dataSkills = "";
	
	var loadData = function() {
		$http.get("http://localhost:3412/data").success(function(json) {
			$scope.data = json;
		});
	};
	
	loadData();
	
//	$scope.dataSearch = ["Tecnologia", "AngularJS", "NodeJS", "Redes", "Hardware", "Python", "MongoDB", ".NET C#", "Java", "HTML/CSS"];
//	var searchData = function() {
//		inDataAPI.getData().success(function(info) {
//			$scope.data = info;
//			$scope.dataSkills = "";
//			$scope.matchPoints = 0;
//			for (i = 0; i < (data.skills.value["length"]); i++) {
//				for (j = 0; j < dataSearch["length"]; j++) {
//					if(data.skills.value[i].skill.name === dataSeacrh[j]) $scope.matchPoints++;
//				}	 
//			}
//			
//			if ($scope.matchPoint >= 3) {
//				alert("Match!");
//			} else {
//				alert("Nada encontrado!");
//			}
//		})
//	};
});