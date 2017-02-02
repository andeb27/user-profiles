angular.module('userProfiles')
.service('friendService', function( $http ) {
  
    
    this.login = function( user ) {
      return $http.post('/api/login', user).then(function(res) {
        return res;
      } )
    };

    this.getFriends = function() {
    	return $http.get('/api/profiles').then(function(res) {
        console.log('working', res)
        return res
      })
    };
  
});
