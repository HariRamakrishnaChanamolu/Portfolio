package com.hrk.portfolio;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

// This annotation tells Java: "This is a Spring Boot App"
@SpringBootApplication
public class Main {
    public static void main(String[] args) {
        // This line launches the actual server
        SpringApplication.run(Main.class, args);
    }
}