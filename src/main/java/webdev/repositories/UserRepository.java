package webdev.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.Query;


import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import webdev.models.User;


public interface UserRepository extends CrudRepository<User, Integer> {
	@Query("SELECT user FROM User user WHERE user.username=:username AND user.password=:password")
	public User findUserByCredentials(@Param("username") String u, @Param("password") String p);
	public Optional<User> findUserByUsername(@Param("username") String u);
}
