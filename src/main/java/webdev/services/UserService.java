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
		return (List<User>) userRepository.findAll();
	}
	
	@GetMapping("/api/user/{username}")
	public Optional<User> findUserByUsername(@PathVariable("username") String username) {
		String u = username;
		return userRepository.findUserByUsername(u);
	}
	
	@GetMapping("/api/user/{userId}")
	public Optional<User> findUserByUserId(@PathVariable("userId") String userId) {
		int id = Integer.parseInt(userId);
		return userRepository.findById(id);
	}
	
	@PostMapping("/api/login")
	public User login(@RequestBody User user, HttpSession session) {
		user = userRepository.findUserByCredentials(user.getUsername(), user.getPassword());
		session.setAttribute("currentUser", user);
		return user;
	}
	
	@PostMapping("/api/logout")
	public void logout(HttpSession session) { 
		session.invalidate();
	}
	
	@GetMapping("/api/profile")
	public User profile(HttpSession session) {
		User currentUser = (User)session.getAttribute("currentUser");
		return currentUser;
	}
	
	@PostMapping("/api/user")
	public void createUser(@RequestBody User user) {
		userRepository.save(user);
	}
	
	@DeleteMapping("/api/user/{userId}")
	public void deleteUser(@PathVariable("userId") int id) {
		userRepository.deleteById(id);
	}
	
	
	
	//Everything below needs work
	
	
	
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
		
		if (findUserByUsername(user.getUsername()) != null) {
			User cu = userRepository.save(user);
			
			session.setAttribute("currentUser", cu);
			
			return cu;
			
		} else {
			return null;        //Error("Username already taken"); //create some kind of error or popup here
		}
		
	}
	


	@PutMapping("/api/profile")
	public User updateProfile(@RequestBody User user, HttpSession session) { 
		/*
		 * will check if a user is currently logged in, by retrieving the "user" 
		 * attribute from the session. If the user attribute is set, then we are 
		 * sure the request was made from a legitimate, logged in user, and we can 
		 * use the User.java instance mapped to the attribute. Using the id property 
		 * of the logged in user, we can then update the corresponding user properties 
		 * in the database. If the user property is not set, then the request was 
		 * not made from a logged in user, and the service should refuse to fulfill 
		 * the request, and return null.
		 */
		return null;
		
	}

	@PutMapping("/api/user/{userId}")
	public User updateUser(@PathVariable("userId") int id, @RequestBody User newUser) {
		
		Optional<User> optional = userRepository.findById(id);
		if(optional.isPresent()) {
			User user = optional.get();
			user.setFirstName(newUser.getFirstName());
			user.setLastName(newUser.getLastName());
			user.setEmail(newUser.getEmail());
			
			return userRepository.save(user);
		}
		return null;
	}
	
}



