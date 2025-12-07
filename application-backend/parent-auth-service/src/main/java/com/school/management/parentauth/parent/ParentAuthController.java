package com.school.management.parentauth.parent;

import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth/parent")
public class ParentAuthController {

    private final ParentService parentService;

    public ParentAuthController(ParentService parentService) {
        this.parentService = parentService;
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerParent(@Valid @RequestBody ParentRegistrationRequest request) {
        try {
            parentService.registerParent(request);
            return ResponseEntity.status(HttpStatus.CREATED)
                    .body("Parent registered successfully");
        } catch (IllegalArgumentException ex) {
            // email already exists or other validation errors from service
            return ResponseEntity.status(HttpStatus.CONFLICT)
                    .body(ex.getMessage());
        }
    }
}
