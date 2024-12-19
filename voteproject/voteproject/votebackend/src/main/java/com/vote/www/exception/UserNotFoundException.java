package com.vote.www.exception;  // Ensure the package is correct

public class UserNotFoundException extends RuntimeException {

    public UserNotFoundException(String message) {
        super(message);
    }
}
