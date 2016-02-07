'use strict';

App.factory('employeeService', ['$http', '$q', function($http, $q){

	return {
		
			getEmployees: function() {
					return $http.get('http://localhost:8080/AngularSpringMVCDataExample/employee/')
							.then(
									function(response){
										return response.data;
									}, 
									function(errResponse){
										
										return $q.reject(errResponse);
									}
							);
			},
		    
		    addEmployee: function(employee){
					return $http.post('http://localhost:8080/AngularSpringMVCDataExample/employee/', user)
							.then(
									function(response){
										return response.data;
									}, 
									function(errResponse){
										
										return $q.reject(errResponse);
									}
							);
		    },
		    
		    modifyEmployee: function(employee, id){
					return $http.put('http://localhost:8080/AngularSpringMVCDataExample/employee/'+id, employee)
							.then(
									function(response){
										return response.data;
									}, 
									function(errResponse){
										
										return $q.reject(errResponse);
									}
							);
			},
		    
			deleteEmployee: function(id){
					return $http.delete('http://localhost:8080/AngularSpringMVCDataExample/employee/'+id)
							.then(
									function(response){
										return response.data;
									}, 
									function(errResponse){
										console.error('Error while deleting user');
										return $q.reject(errResponse);
									}
							);
			}
		
	};

}]);
