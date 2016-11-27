angular.module("inspector").factory("inDataAPI", function($http) {
	var _getData = function() {
		return ($http.get("http://localhost:3412/data"));
	}

	return {
		getData: _getData
	};
});