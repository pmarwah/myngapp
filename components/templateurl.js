(function(angular) {


    angular.module("app").controller('TypeAheadController', function($scope, dataFactory) {
        dataFactory.get('common/states.json').then(function(data) {
            $scope.items = data;
        });
        $scope.name = "";
        $scope.onItemSelected = function() {
            console.log('selected=' + $scope.name);
        }
    });


})(window.angular);