(function () {
    var $usernameFld, $passwordFld;
    var $removeBtn, $editBtn, $createBtn;
    var $firstNameFld, $lastNameFld;
    var $userRowTemplate, $tbody, $roleFld;
    var userService = new UserServiceClient();
    $(main);

    function main() { 
        userService
        .findAllUsers()
        .then(renderUsers);
    	}
    
    
    function createUser() { 
    	/*
    	 * handles create user event when user clicks on plus icon. 
    	 * Reads from the form elements and creates a user object. 
    	 * Uses the user service createUser() function to create the new user. 
    	 * Updates the list of users on server response
    	 */
    	userService
    	.createUser()
    	.findAllUsers()
    	.then(renderUsers);
    	
    	}
    
    
    function findAllUsers() { 
    	/*
    	 * called whenever the list of users needs to be refreshed. 
    	 * Uses user service findAllUsers() to retrieve all the users 
    	 * and passes response to renderUsers
    	 */
    	
    	userService
    	.findAllUsers()
    	.then(renderUsers);
    	}
    
    
    function findUserById() { 
    	/*
    	 * called whenever a particular user needs to be retrieved 
    	 * by their id, as in when a user is selected for editing. 
    	 * Reads the user is from the icon id attribute. 
    	 * Uses user service findUserById() to retrieve user and then 
    	 * updates the form on server response
    	 */
    	
    	userService
    	.findUserById()
    	.findAllUsers()
    	.then(renderUsers);
    	
    	}
    
    
    
    function deleteUser(event) { 
    	/*
    	 * handles delete user event when user clicks the cross icon. 
    	 * Reads the user is from the icon id attribute. 
    	 * Uses user service deleteUser() to send a delete request to the server. 
    	 * Updates user list on server response
    	 */
        console.log(event);
        var $button = $(event.currentTarget);
        var id = $button.attr('id');

        userService
          .deleteUser(id)
          .then(function () {
            userServiceClient
              .findAllUsers()
              .then(renderUsers);
          });	
    	}
    
    
    
    function selectUser() { … }
    function updateUser() { 
    	/*
    	 * handles update user event when user clicks on check mark icon. 
    	 * Reads the user is from the icon id attribute. 
    	 * Reads new user values form the form, creates a user object and then 
    	 * uses user service updateUser() to send the new user data to server. 
    	 * Updates user list on server response
    	 */
    	
    	userService
    	.updateUser()
    	.findAllUsers()
    	.then(renderUsers);
    	
    	}
    
    
    
    function renderUser(user) {
    	/*
    	 * accepts a user object as parameter and 
    	 * updates the form with the user properties
    	 */
    	}
    
    
    
    function renderUsers(users) { 
    	/*
    	 * accepts an array of user instances, 
    	 * clears the current content of the table body, 
    	 * iterates over the array of users, 
    	 * clones a table row template for each user instance, 
    	 * populates the table row with the user object properties, 
    	 * adds the table row to the table body
    	 */
    	
    	console.log(users);

        var tbody = $('tbody');
        tbody.empty();
        for(var i=0; i<users.length; i++) {
          var user = users[i];

          var tr = $('<tr>');
          var td = $('<td>');
          td.append(user.username);
          tr.append(td);

          td = $('<td>');
          td.append('*******');
          tr.append(td);

          td = $('<td>');
          td.append(user.firstName);
          tr.append(td);

          td = $('<td>');
          td.append(user.lastName);
          tr.append(td);

          td = $('<td>');
          td.append('hello@world.com');
          tr.append(td);

          td = $('<td>');
          td.append('Student');
          tr.append(td);

          td = $('<td>');
          var deleteBtn = $('<button>DELETE</button>');
          deleteBtn.click(deleteUser);
          deleteBtn.attr('id', user.id);
          td.append(deleteBtn);
          tr.append(td);

          tr.appendTo(tbody);
        }
      }
    
    
})();











