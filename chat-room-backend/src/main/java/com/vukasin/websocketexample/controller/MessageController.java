package com.vukasin.websocketexample.controller;

import com.vukasin.websocketexample.model.domain.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MessageController {

    @Autowired
    private SimpMessagingTemplate template;

    @MessageMapping("/send/message")
    public void sendMsg(@Payload Message message){
        this.template.convertAndSend("/message",message);
    }
}
