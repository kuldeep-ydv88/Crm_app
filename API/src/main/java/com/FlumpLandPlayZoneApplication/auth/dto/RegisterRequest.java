package com.FlumpLandPlayZoneApplication.auth.dto;

import com.FlumpLandPlayZoneApplication.auth.entity.Role;
import lombok.Data;

@Data
public class RegisterRequest {
    private String username;
    private String password;
    private String email;
    private String fullName;
    private Role role = Role.USER;
}
