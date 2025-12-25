package com.school.management.parentauth;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.LinkedHashMap;
import java.util.Map;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String, String>> handleValidationExceptions(MethodArgumentNotValidException ex) {
        Map<String, String> errors = new LinkedHashMap<>();
        for (FieldError fe : ex.getBindingResult().getFieldErrors()) {
            // Use default message if provided; otherwise use a simple fallback
            String msg = fe.getDefaultMessage() != null ? fe.getDefaultMessage() : "Invalid value";
            errors.put(fe.getField(), msg);
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errors);
    }

    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<Map<String, String>> handleIllegalArgument(IllegalArgumentException ex) {
        Map<String, String> resp = new LinkedHashMap<>();
        resp.put("error", ex.getMessage());
        return ResponseEntity.status(HttpStatus.CONFLICT).body(resp);
    }

    // Optional: generic fallback so the frontend always receives JSON
    @ExceptionHandler(Exception.class)
    public ResponseEntity<Map<String, String>> handleAll(Exception ex) {
        Map<String, String> resp = new LinkedHashMap<>();
        resp.put("error", "Internal server error");
        // log exception server-side if you have logger here (omitted for brevity)
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(resp);
    }
}
