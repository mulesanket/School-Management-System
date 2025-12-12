package com.school.management.parentauth.parent;

import jakarta.persistence.*;
import java.time.OffsetDateTime;

@Entity
@Table(name = "parents")
public class Parent {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "full_name", nullable = false, length = 100)
    private String fullName;

    @Column(nullable = false, unique = true, length = 150)
    private String email;

    @Column(name = "password_hash", nullable = false, length = 255)
    private String passwordHash;

    @Column(length = 20)
    private String phone;

    @Column(name = "pupil_name", length = 255)
    private String pupilName;

    @Column(name = "relationship", length = 50)
    private String relationship;

    @Column(name = "created_at", nullable = false)
    private OffsetDateTime createdAt;

    @Column(name = "updated_at")
    private OffsetDateTime updatedAt;

    public Parent() {}

    public Long getId() { return id; }

    public String getFullName() { return fullName; }
    public void setFullName(String fullName) { this.fullName = fullName; touchUpdatedAt(); }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; touchUpdatedAt(); }

    public String getPasswordHash() { return passwordHash; }
    public void setPasswordHash(String passwordHash) { this.passwordHash = passwordHash; touchUpdatedAt(); }

    public String getPhone() { return phone; }
    public void setPhone(String phone) { this.phone = phone; touchUpdatedAt(); }

    public String getPupilName() { return pupilName; }
    public void setPupilName(String pupilName) { this.pupilName = pupilName; touchUpdatedAt(); }

    public String getRelationship() { return relationship; }
    public void setRelationship(String relationship) { this.relationship = relationship; touchUpdatedAt(); }

    public OffsetDateTime getCreatedAt() { return createdAt; }
    public OffsetDateTime getUpdatedAt() { return updatedAt; }

    @PrePersist
    public void onPrePersist() {
        OffsetDateTime now = OffsetDateTime.now();
        this.createdAt = now;
        this.updatedAt = now;
    }

    @PreUpdate
    public void onPreUpdate() {
        this.updatedAt = OffsetDateTime.now();
    }

    private void touchUpdatedAt() {
        this.updatedAt = OffsetDateTime.now();
    }
}
