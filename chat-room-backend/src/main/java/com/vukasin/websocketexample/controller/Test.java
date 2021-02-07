package com.vukasin.websocketexample.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Test {


    @GetMapping
    public String hy(){
        return "helo";
    }
}
