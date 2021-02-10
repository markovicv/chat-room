package com.vukasin.websocketexample.controller;

import com.vukasin.websocketexample.model.dto.LoginRequest;
import com.vukasin.websocketexample.model.dto.RegisterRequest;
import com.vukasin.websocketexample.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "*")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterRequest registerRequest){
        try{
            userService.save(registerRequest);
            return ResponseEntity.ok("User registered");
        }
        catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());

        }
    }
    @PostMapping("/auth")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest){
        try{
            return ResponseEntity.ok(userService.login(loginRequest));
        }
        catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }
    @GetMapping("/hi")
    public String hi(){
        return "AAAA";
    }


}
