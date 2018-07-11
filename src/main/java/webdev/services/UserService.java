package webdev.services;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;
import java.util.*;

import javax.servlet.http.HttpSession;

import webdev.models.User;
import webdev.repositories.UserRepository;

@RestController
public class UserService {
	@Autowired
	UserRepository userRepository;
	
	@GetMapping("/api/user")	
	public List<User> findAllUsers() {
		return userRepository.findAll();
	}
	
	@GetMapping("/api/user")	// fix mapping
	public List<User> findUserByUsername() {
		return userRepository.findUserByUsername();
	}
	
	
	@PostMapping("/api/register")
	public User register(@RequestBody User user, HttpSession session) {
		/*
		 * The endpoint should use the user repository findUserByUsername() method
		 *  to verify that the username is not already in use. If not in use, the endpoint
		 *  should use the user repository createUser() to insert the new user into the
		 *  database and then add the new user to the session attribute "user" to set the 
		 *  new user as currently logged in. Subsequent HTTP requests can check for the "user" 
		 *  session attribute to verify that there's a logged in user.
		 */
		
		return user; 
		
	}
	
	@PostMapping("/api/login")
	public User login(@RequestBody User user, HttpSession session) {

		/*
		 * The login() method uses the findUserByCredentials() method in the user repository
		 *  to find the user. If the user exists, the login should add the user to the HTTP 
		 *  session passed in as a parameter. Save the found user in a session variable called "user". 
		 *  This session variable can be used later by the user profile page to retrieve the information 
		 *  of the currently logged in user. The login function should return the user object which will 
		 *  be sent back to the client. The client login controller will use the user object to decide 
		 *  whether the login was successful or not and whether to navigate to the profile page.
		 */
		return user; 
	}

	
	
}

