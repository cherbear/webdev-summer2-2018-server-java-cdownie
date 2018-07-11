function UserServiceClient() {
    this.createUser = createUser;
    this.findAllUsers = findAllUsers;
    this.findUserById = findUserById;
    this.deleteUser = deleteUser;
    this.updateUser = updateUser;
    this.register = register;
    this.login = login;
    this.url = 'http://localhost:8080/api/user';
    var self = this;
    
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
    
    
    function register() { ... }
    
    function login() { … }
}






