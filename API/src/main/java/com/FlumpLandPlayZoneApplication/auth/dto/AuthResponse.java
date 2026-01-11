package com.FlumpLandPlayZoneApplication.auth.dto;

import com.FlumpLandPlayZoneApplication.auth.entity.Role;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class AuthResponse {
    private String token;
    private String username;
    private String email;
    private String fullName;
    private Role role;
}
