angular.module('userProfiles')
.service('friendService', function( $http ) {


    this.login = function( user ) {
      var promise = $http({
        method: 'POST',
        url:'http://localhost:8080/api/login',
        data: {
          name: user.name,
          password: user.password
        }
      })

      return promise.then(function (response) {
        return response;
      })
    };

    this.getFriends = function() {
      var promise = $http({
        method: 'GET',
        url:'http://localhost:8080/api/profiles',
      })

      return promise.then(function (response) {
        return response;
      })
    };

});
