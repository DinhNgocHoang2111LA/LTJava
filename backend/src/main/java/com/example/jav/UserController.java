package com.example.jav;

import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.Optional;

@RestController
@RequestMapping("/api")
@CrossOrigin("http://localhost:3000")

public class UserController {
    @Autowired
    UserRepository UserRepository;

    @GetMapping("/user/{id}")
    public ResponseEntity<User> show(@PathVariable String id) {
        return ResponseEntity.of(UserRepository.findById(Integer.parseInt(id)));
    }

    @PostMapping("/user/registry")
    public ResponseEntity<?> create(@RequestBody User user) {
        String username = user.getUsername();
        String email = user.getEmail();

        Optional<User> existingUser = UserRepository.findByUsernameOrEmail(username, email);
        if (existingUser.isPresent()) {

            return ResponseEntity.status(HttpStatus.CONFLICT).body("Tên người dùng hoặc email đã tồn tại");
        } else {

            User newUser = UserRepository.save(user);

            return ResponseEntity.status(HttpStatus.CREATED).body(newUser);
        }
    }

    @PostMapping("/login")
    public ResponseEntity<User> login(@RequestBody  User loginUser) {

        String username = loginUser.getUsername();
        String password = loginUser.getPassword();


        Optional<User> userOptional = UserRepository.findByUsernameAndPassword(username, password);
        if (userOptional.isPresent()) {

            return ResponseEntity.ok(userOptional.get());
        } else {

            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }


}