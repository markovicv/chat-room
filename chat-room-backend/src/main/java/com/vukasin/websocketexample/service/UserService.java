package com.vukasin.websocketexample.service;

import com.vukasin.websocketexample.config.JwtConfig;
import com.vukasin.websocketexample.model.domain.User;
import com.vukasin.websocketexample.model.dto.LoginRequest;
import com.vukasin.websocketexample.model.dto.LoginResponse;
import com.vukasin.websocketexample.model.dto.RegisterRequest;
import com.vukasin.websocketexample.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtConfig jwtConfig;

    public void save(RegisterRequest registerRequest) throws RuntimeException{
        if(userRepository.existsByUsername(registerRequest.getUsername())){
            throw new RuntimeException("user already exists");
        }
        User user = new User(null,registerRequest.getUsername(),
                passwordEncoder.encode(registerRequest.getPassword()));
        userRepository.save(user);
    }


    public LoginResponse login(LoginRequest loginRequest){
        Authentication auth =authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(),loginRequest.getPassword())
        );
        SecurityContextHolder.getContext().setAuthentication(auth);
        String jwt = jwtConfig.generateToken(auth);
        UserDetails userDetails = (UserDetails)SecurityContextHolder.getContext().getAuthentication().getPrincipal() ;
        return new LoginResponse(userDetails.getUsername(),jwt);
    }
}
