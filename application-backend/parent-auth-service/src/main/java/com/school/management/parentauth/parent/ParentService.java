package com.school.management.parentauth.parent;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ParentService {

    private final ParentRepository parentRepository;
    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public ParentService(ParentRepository parentRepository) {
        this.parentRepository = parentRepository;
    }

    @Transactional
    public void registerParent(ParentRegistrationRequest request) {
        if (request.getEmail() == null || request.getPassword() == null || request.getName() == null) {
            throw new IllegalArgumentException("Missing required fields");
        }

        if (parentRepository.existsByEmail(request.getEmail())) {
            throw new IllegalArgumentException("Email is already registered");
        }

        Parent parent = new Parent();
        parent.setFullName(request.getName());
        parent.setEmail(request.getEmail());
        parent.setPhone(request.getPhone());
        parent.setPupilName(request.getPupilName());
        parent.setRelationship(request.getRelationship());

        String passwordHash = passwordEncoder.encode(request.getPassword());
        parent.setPasswordHash(passwordHash);

        parentRepository.save(parent);
    }
}
