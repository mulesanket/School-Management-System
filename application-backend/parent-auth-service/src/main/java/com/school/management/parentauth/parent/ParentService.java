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
        // check if email already exists
        if (parentRepository.existsByEmail(request.getEmail())) {
            throw new IllegalArgumentException("Email is already registered");
        }

        Parent parent = new Parent();
        parent.setFullName(request.getName());
        parent.setEmail(request.getEmail());
        parent.setPhone(request.getPhone());

        // hash password
        String passwordHash = passwordEncoder.encode(request.getPassword());
        parent.setPasswordHash(passwordHash);

        // TODO: later link parent to pupil entity using pupilName + relationship
        parentRepository.save(parent);
    }
}
