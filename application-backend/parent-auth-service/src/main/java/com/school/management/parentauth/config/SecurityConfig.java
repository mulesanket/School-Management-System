package com.school.management.parentauth.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable()) // disable CSRF for API
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/auth/parent/**").permitAll() // allow parent auth endpoints
                .anyRequest().authenticated()                       // everything else still secured
            )
            .httpBasic(httpBasic -> {}); // keep basic auth for actuator/others

        return http.build();
    }
}
