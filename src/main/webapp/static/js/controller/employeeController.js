'use strict';

App.controller('empService', ['$scope', 'empService', function($scope, empService) {
          var empObj = this;
          empObj.emp={id:null,username:'',address:'',email:''};
          empObj.empls=[];
              
          empObj.getEmployees = function(){
        	  empService.getEmployees()
                  .then(
      					       function(d) {
      					    	 empObj.empls = d;
      					       },
            					function(errResponse){
            						console.error('getUsers');
            					}
      			       );
          };
           
          empObj.addEmployee = function(emp){
        	  empService.addEmployee(emp)
		              .then(
		            		  empObj.getEmployees, 
				              function(errResponse){
					               
				              }	
                  );
          };

          empObj.modifyEmployee = function(emp, id){
        	  empService.modifyEmployee(emp, id)
		              .then(
		            		  empObj.getEmployees, 
				              function(errResponse){
					               console.error('Error while modify');
				              }	
                  );
          };

          empObj.deleteUser = function(id){
        	  empService.deleteUser(id)
		              .then(
		            		  empObj.getEmployees, 
				              function(errResponse){
					               
				              }	
                  );
          };

          empObj.getEmployees();

          empObj.submit = function() {
              if(empObj.emp.id==null){
                      
                  empObj.createUser(empObj.emp);
              }else{
            	  empObj.modifyEmployee(empObj.emp, empObj.emp.id);
                  
              }
              empObj.reset();
          };
              
          empObj.edit = function(id){
              console.log('id to be edited', id);
              for(var i = 0; i < empObj.empls.length; i++){
                  if(empObj.users[i].id == id) {
                	  empObj.emp = angular.copy(empObj.empls[i]);
                     break;
                  }
              }
          };
              
          empObj.remove = function(id){
              console.log('id to be deleted', id);
              for(var i = 0; i < empObj.empls.length; i++){
                  if(empObj.empls[i].id == id) {
                	  empObj.reset();
                     break;
                  }
              }
              empObj.deleteEmployee(id);
          };

          
        

      }]);
