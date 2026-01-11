# JWT Authentication Implementation

## Overview
This implementation provides complete JWT-based authentication for the CRM application with Angular frontend and Spring Boot backend.

## Architecture

### Backend (Spring Boot)
- **Technology**: Spring Boot 3.4.2, Spring Security 6.4.2, JWT (jjwt 0.12.3)
- **Java Version**: 17
- **Database**: MongoDB (existing connection)
- **Authentication Flow**:
  1. User registers or logs in via REST API
  2. Backend validates credentials using BCrypt
  3. JWT token generated with 24-hour expiration
  4. Token returned to client
  5. Client includes token in Authorization header for subsequent requests
  6. JwtAuthenticationFilter validates token on each request

### Frontend (Angular)
- **Technology**: Angular 19.0.0, Bootstrap 5.3.3
- **Authentication Flow**:
  1. User navigates to login/register page
  2. Credentials sent to backend API
  3. JWT token stored in localStorage
  4. JWT interceptor automatically attaches token to all HTTP requests (except auth endpoints)
  5. AuthGuard protects routes from unauthorized access
  6. Token expiration validated on each authentication check

## API Endpoints

### Public Endpoints (No Authentication Required)
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login existing user

### Protected Endpoints (Authentication Required)
- `GET /api/auth/profile` - Get current user profile
- `POST /api/auth/logout` - Logout (server-side token invalidation)
- All other application endpoints

## Security Features

1. **Password Encryption**: BCrypt with default strength (10 rounds)
2. **Token Expiration**: 24 hours (86400000 ms)
3. **Stateless Sessions**: No server-side session storage
4. **Role-Based Access**: USER and ADMIN roles
5. **CORS Configuration**: Allows cross-origin requests
6. **CSRF Protection**: Disabled for JWT (stateless authentication)
7. **Token Validation**: Signature and expiration validation on each request

## Frontend Components

### LoginComponent
- Bootstrap-styled login form
- Username and password validation
- Error handling with toast notifications
- Redirects to return URL or dashboard after successful login

### RegisterComponent
- Bootstrap-styled registration form
- Email validation
- Password strength (minimum 6 characters)
- Password confirmation matching
- Reusable password match validator

### DashboardComponent
- Displays user profile information
- Shows username, email, full name, and role
- Logout functionality

### AuthService
- Handles authentication operations
- Manages JWT token storage
- Provides authentication state observable
- Token expiration validation
- Server-side logout call

### JWT Interceptor
- Automatically attaches JWT token to HTTP requests
- Excludes auth endpoints (login/register)
- Adds Authorization header with Bearer token

### AuthGuard
- Protects routes from unauthorized access
- Redirects to login page with return URL
- Validates authentication state before route activation

## Configuration

### Backend (application.yml)
```yaml
server:
  port: 8080

jwt:
  secret: [base64-encoded secret]
  expiration: 86400000
```

### Frontend (environment.ts)
```typescript
export const environment = {
  production: false,
  API_URL: 'http://localhost:8080'
};
```

## Testing

### Manual Testing Steps
1. Start Spring Boot backend: `cd API && ./mvnw spring-boot:run`
2. Start Angular frontend: `cd gameapp && npm start`
3. Navigate to http://localhost:4200/register
4. Register a new user
5. Verify redirect to dashboard
6. Check user profile displayed correctly
7. Test logout functionality
8. Verify redirect to login page
9. Test login with registered credentials
10. Verify protected routes require authentication

## Security Considerations

### CSRF Protection
- CSRF is disabled for JWT authentication because:
  - Tokens stored in localStorage (not cookies)
  - API is stateless
  - CORS configured to control access origins
  - Tokens sent via Authorization header (not automatically by browser)

### Token Storage
- JWT tokens stored in localStorage
- Consider using httpOnly cookies for enhanced security in production
- Implement refresh token mechanism for long-lived sessions

### Password Requirements
- Minimum 6 characters
- Consider adding complexity requirements (uppercase, lowercase, numbers, symbols)
- Implement password reset functionality

## Future Enhancements

1. **Refresh Tokens**: Implement refresh token mechanism for extended sessions
2. **Remember Me**: Optional long-lived sessions
3. **Password Reset**: Email-based password recovery
4. **Two-Factor Authentication**: Enhanced security with 2FA
5. **Account Lockout**: Prevent brute force attacks
6. **Password History**: Prevent password reuse
7. **Session Management**: Track active sessions and allow remote logout
8. **Audit Logging**: Log authentication events
9. **Rate Limiting**: Prevent abuse of authentication endpoints

## Deployment Considerations

1. **JWT Secret**: Use environment variable for production
2. **Token Expiration**: Adjust based on security requirements
3. **HTTPS**: Always use HTTPS in production
4. **CORS**: Configure allowed origins for production
5. **Database**: Ensure auth_users collection has proper indexes
6. **Monitoring**: Implement authentication metrics and alerts
