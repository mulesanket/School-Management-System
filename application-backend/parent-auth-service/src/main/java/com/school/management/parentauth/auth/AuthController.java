package com.school.management.parentauth.auth;

import com.school.management.parentauth.parent.Parent;
import com.school.management.parentauth.parent.ParentRegistrationRequest;
import com.school.management.parentauth.parent.ParentRepository;
import com.school.management.parentauth.parent.ParentService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/auth/parent")
@CrossOrigin(origins = "*")
public class AuthController {

    private final ParentService parentService;
    private final ParentRepository parentRepository;
    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public AuthController(ParentService parentService, ParentRepository parentRepository) {
        this.parentService = parentService;
        this.parentRepository = parentRepository;
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody ParentRegistrationRequest request) {
        try {
            parentService.registerParent(request);
            return ResponseEntity.status(HttpStatus.CREATED)
                    .body("Parent registered successfully");
        } catch (IllegalArgumentException ex) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(ex.getMessage());
        } catch (Exception ex) {
            ex.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Registration failed");
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@Valid @RequestBody LoginRequest request) {
        Optional<Parent> optionalParent = parentRepository.findByEmail(request.getEmail());
        if (optionalParent.isEmpty()) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }

        Parent parent = optionalParent.get();
        boolean matches = passwordEncoder.matches(request.getPassword(), parent.getPasswordHash());
        if (!matches) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }

        Map<String, Object> body = Map.of(
                "message", "Login successful",
                "parentId", parent.getId(),
                "fullName", parent.getFullName(),
                "email", parent.getEmail()
        );

        return ResponseEntity.ok(body);
    }
}
