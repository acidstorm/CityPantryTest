angular.module('jsCodingTest', [
    // Add module dependencies here.
    'cpLib'
]);

angular.module('jsCodingTest').controller('GiveTheGovernmentABurrito', ["$scope", "$timeout", "PackagesFactory", function($scope, $timeout, PackagesFactory) {
    // Your JavaScript goes here.

    /* DEFAULTS */
    $scope.name = "Burrito"
    $scope.postCode = "SW1A 0AA"
    $scope.packages = []
    $scope.errorMessage = ""
    $scope.showErrorMessage = false
    $scope.isFetchingData = true
    /* END DEFAULTS */

    PackagesFactory.searchPackages($scope.name, $scope.postcode).success(function (results) {
        $scope.packages = (results && results.packages) || [] 
        $scope.isFetchingData = false
    }).error(function () {
    	$scope.errorMessage = "Oh Noes!!, an error occurred. The server did not return a response. Is your internet switched on?"
    	$scope.showErrorMessage = true
    	$timeout(function () {
    		$scope.resetErrorMessages()
    	}, 10000)
    })
    $scope.resetErrorMessages = function () {
    	$scope.showErrorMessage = false
    	$scope.errorMessage = ""
    }
    // Your code should use our JS library's `PackagesFactory.searchPackages` method to search
    // for burritos that can be delivered to the Houses of Parliament in London.
    // The API URL that should be called is:
    // https://api.citypantry.com/packages/search?name=Burrito&postcode=SW1A%200AA
}]);
