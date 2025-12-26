package com.school.management.parentauth;

import java.sql.Connection;
import javax.sql.DataSource;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HealthController {

    private final DataSource dataSource;

    public HealthController(DataSource dataSource) {
        this.dataSource = dataSource;
    }

    @GetMapping("/health/live")
    public ResponseEntity<String> live() {
        return ResponseEntity.ok("ALIVE");
    }

    @GetMapping("/health/ready")
    public ResponseEntity<String> ready() {
        try (Connection conn = dataSource.getConnection()) {
            if (conn.isValid(1)) {
                return ResponseEntity.ok("READY");
            }
        } catch (Exception e) {
            // ignore
        }
        return ResponseEntity.status(503).body("NOT READY");
    }

    @GetMapping("/health/startup")
    public ResponseEntity<String> startup() {
        return ResponseEntity.ok("STARTED");
    }
}
