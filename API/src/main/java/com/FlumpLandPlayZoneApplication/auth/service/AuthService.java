package com.FlumpLandPlayZoneApplication.auth.service;

import com.FlumpLandPlayZoneApplication.auth.dto.AuthResponse;
import com.FlumpLandPlayZoneApplication.auth.dto.LoginRequest;
import com.FlumpLandPlayZoneApplication.auth.dto.RegisterRequest;
import com.FlumpLandPlayZoneApplication.auth.dto.UserProfileResponse;
import com.FlumpLandPlayZoneApplication.auth.entity.Role;
import com.FlumpLandPlayZoneApplication.auth.entity.User;
import com.FlumpLandPlayZoneApplication.auth.repository.UserRepository;
import com.FlumpLandPlayZoneApplication.auth.util.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;
    private final AuthenticationManager authenticationManager;

    public AuthResponse register(RegisterRequest request) {
        if (userRepository.existsByUsername(request.getUsername())) {
            throw new RuntimeException("Username already exists");
        }

        if (userRepository.existsByEmail(request.getEmail())) {
            throw new RuntimeException("Email already exists");
        }

        User user = new User();
        user.setUsername(request.getUsername());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setEmail(request.getEmail());
        user.setFullName(request.getFullName());
        user.setRole(request.getRole() != null ? request.getRole() : Role.USER);
        user.setEnabled(true);

        userRepository.save(user);

        String token = jwtUtil.generateToken(user.getUsername());
        return new AuthResponse(token, user.getUsername(), user.getEmail(), user.getFullName(), user.getRole());
    }

    public AuthResponse login(LoginRequest request) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword())
        );

        User user = (User) authentication.getPrincipal();
        String token = jwtUtil.generateToken(user.getUsername());

        return new AuthResponse(token, user.getUsername(), user.getEmail(), user.getFullName(), user.getRole());
    }

    public UserProfileResponse getProfile(String username) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("User not found"));
        
        return new UserProfileResponse(user.getId(), user.getUsername(), user.getEmail(), user.getFullName(), user.getRole());
    }
}
