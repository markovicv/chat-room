package com.vukasin.websocketexample.config;

import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.provisioning.UserDetailsManager;
import org.springframework.web.socket.config.annotation.EnableWebSocket;

@EnableWebSocket
public class SecurityConfig extends WebSecurityConfigurerAdapter {


    public UserDetailsService getUserDetails(){

        UserDetailsManager manager = new InMemoryUserDetailsManager();

        UserDetails u1 = User.withUsername("marko")
                .roles("ADMIN")
                .password("123")
                .build();
        UserDetails u2 = User.withUsername("vuk")
                .roles("ADMIN")
                .password("123")
                .build();
        manager.createUser(u1);
        manager.createUser(u2);
        return manager;
    }


    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests()
                .anyRequest()
                .authenticated();
        
    }

    @Bean
    public PasswordEncoder generatePasswordEncoder(){
        return NoOpPasswordEncoder.getInstance();
    }

}
