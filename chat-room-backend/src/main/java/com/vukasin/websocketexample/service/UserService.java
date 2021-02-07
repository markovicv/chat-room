package com.vukasin.websocketexample.service;

import com.vukasin.websocketexample.model.domain.User;
import com.vukasin.websocketexample.model.dto.RegisterRequest;
import com.vukasin.websocketexample.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public void save(RegisterRequest registerRequest) throws RuntimeException{
        if(userRepository.existsByUsername(registerRequest.getUsername())){
            throw new RuntimeException("user already exists");
        }
        User user = new User(null,registerRequest.getUsername(),registerRequest.getPassword());
        userRepository.save(user);
    }
}
