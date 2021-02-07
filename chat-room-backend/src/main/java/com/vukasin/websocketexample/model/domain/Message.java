package com.vukasin.websocketexample.model.domain;

public class Message {
    private String senderUsername;
    private String content;

    public Message(){

    }


    public String getSenderUsername() {
        return senderUsername;
    }

    public void setSenderUsername(String senderUsername) {
        this.senderUsername = senderUsername;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
