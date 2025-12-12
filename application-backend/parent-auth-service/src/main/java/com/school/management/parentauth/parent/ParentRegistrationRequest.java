package com.school.management.parentauth.parent;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class ParentRegistrationRequest {

    @NotBlank
    @Size(max = 100)
    private String name;

    @NotBlank
    @Email
    @Size(max = 150)
    private String email;

    @Size(max = 20)
    private String phone;

    @NotBlank
    @Size(max = 100)
    private String pupilName;

    @NotBlank
    @Size(max = 50)
    private String relationship;

    @NotBlank
    @Size(min = 8, max = 128)
    private String password;

    public ParentRegistrationRequest() {}

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getPhone() { return phone; }
    public void setPhone(String phone) { this.phone = phone; }

    public String getPupilName() { return pupilName; }
    public void setPupilName(String pupilName) { this.pupilName = pupilName; }

    public String getRelationship() { return relationship; }
    public void setRelationship(String relationship) { this.relationship = relationship; }

    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }
}
