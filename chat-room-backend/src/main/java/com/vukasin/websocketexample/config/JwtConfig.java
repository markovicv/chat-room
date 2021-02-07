package com.vukasin.websocketexample.config;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class JwtConfig {

    @Value("${jwt.secret}")
    private String secret;


    public String generateToken(Authentication authentication){

        Long now = System.currentTimeMillis();
        return Jwts.builder()
                .setSubject(authentication.getName())
                .setIssuedAt(new Date(now))
                .signWith(SignatureAlgorithm.HS512,secret.getBytes())
                .compact();
    }

    public boolean validateToken(String jwt){
        Jwts.parser().setSigningKey(this.secret.getBytes())
                .parseClaimsJws(jwt);
        return true;
    }
    public String getUsername(String token){
        Claims claims = Jwts.parser()
                .setSigningKey(this.secret.getBytes())
                .parseClaimsJws(token)
                .getBody();
        return claims.getSubject();
    }

    public List<String> getAuthorities(String token){
        Claims claims = Jwts.parser()
                .setSigningKey(this.secret.getBytes())
                .parseClaimsJws(token)
                .getBody();
        return (List<String>)claims.get("authorities");
    }


}
