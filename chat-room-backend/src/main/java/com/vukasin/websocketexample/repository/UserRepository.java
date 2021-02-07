package com.vukasin.websocketexample.repository;

import com.vukasin.websocketexample.model.domain.User;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface UserRepository extends MongoRepository<User,String> {
    public boolean existsByUsername(String username);
}
