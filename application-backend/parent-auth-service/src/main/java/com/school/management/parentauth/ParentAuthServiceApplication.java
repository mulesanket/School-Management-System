package com.school.management.parentauth;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.flyway.FlywayAutoConfiguration;

@SpringBootApplication(exclude = { FlywayAutoConfiguration.class })
public class ParentAuthServiceApplication {
    public static void main(String[] args) {
        SpringApplication.run(ParentAuthServiceApplication.class, args);
    }
}