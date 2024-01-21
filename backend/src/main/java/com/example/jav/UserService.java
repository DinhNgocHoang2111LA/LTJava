package com.example.jav;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface UserService {
    User createUser(User user);

    User getUserById(Long userId);

    Page<User> getAllUsers(Pageable pageable);

    User updateUser(Product user);

    void deleteUser(Long userId);
    // public void saveImage(MultipartFile file) throws IOException;
}
