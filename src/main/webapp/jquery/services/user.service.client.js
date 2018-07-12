function UserServiceClient() {
    this.createUser = createUser;
    this.findAllUsers = findAllUsers;
    this.findUserById = findUserById;
    this.deleteUser = deleteUser;
    this.updateUser = updateUser;
    this.renderUsers = renderUsers;
    this.register = register;
    this.login = login;
    this.url = 'http://localhost:8080/api/user';
    var self = this;
    
    var userServiceClient = new UserServiceClient();
    
    function init() {
        userServiceClient
          .findAllUsers()
          .then(renderUsers);
      }
      init();
    
    
    function createUser(user, callback) { 
    	/*
    	 * accepts a user object and POSTs it to a user Web service. Receives status
    	 * POST /api/user
    	 */
    	}
    
    
    
    function findAllUsers(callback) { 
    	/*
    	 * sends a GET request to user Web service. Receives a JSON array of all users
    	 * GET /api/user
    	 */
    	}
    
    
    
    function findUserById(userId, callback) { 
    	/*
    	 * sends a GET request to user Web service with userId as path parameter. 
    	 * Receives a single JSON object for the userId
    	 * GET /api/user/{userId}
    	 */
    	}
    
    
    
    function updateUser(userId, user, callback) { 
    	/*
    	 * accepts a user id and user object with new property values for the user with user id.
    	 * Sends PUT request with user object and user id as path parameter
    	 * PUT /api/user/{userId}
    	 */
    	}
    
    
    
    function deleteUser(userId, callback) { 
    	/*
    	 * sends a DELETE request to user Web service with user id as path 
    	 * parameter for user to remove. Receives status
    	 * DELETE /api/user/{userId}
    	 */
    }
    
    function renderUsers(users) {
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
    
    
    function register() { ... }
    
    function login() { … }
    
    function updateProfile() { ... }
    
    function logout() { ... }
}






