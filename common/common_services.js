(function(angular) {
    angular.module("app").factory('dataFactory', function($http) {
        return {
            get: function(url) {
                return $http.get(url).then(function(resp) {
                    return resp.data;
                });
            }
        };
    });
})(window.angular);