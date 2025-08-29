import { expect } from 'chai';

// Input validation functions
const validateRegistration = (userData) => {
    const errors = {};
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!userData.email || !emailRegex.test(userData.email)) {
        errors.email = 'Invalid email format';
    }

    // Password validation
    if (!userData.password || userData.password.length < 6) {
        errors.password = 'Password must be at least 6 characters long';
    }

    // Password confirmation
    if (userData.password !== userData.confirmPassword) {
        errors.confirmPassword = 'Passwords do not match';
    }

    return Object.keys(errors).length > 0 ? errors : null;
};

// Password strength checker
const checkPasswordStrength = (password) => {
    let strength = 0;
    
    // Length check
    if (password.length >= 8) strength++;
    
    // Contains number
    if (/\d/.test(password)) strength++;
    
    // Contains lowercase
    if (/[a-z]/.test(password)) strength++;
    
    // Contains uppercase
    if (/[A-Z]/.test(password)) strength++;
    
    // Contains special character
    if (/[!@#$%^&*]/.test(password)) strength++;
    
    return {
        score: strength,
        isStrong: strength >= 4
    };
};

describe('Authentication Unit Tests', () => {
    describe('Registration Validation', () => {
        it('should validate user registration data correctly', () => {
            // Test Case 1: Invalid registration data
            const invalidUser = {
                name: 'Test User',
                username: 'testuser',
                email: 'invalid-email',
                password: '123',
                confirmPassword: '456'
            };
            
            const errors = validateRegistration(invalidUser);
            
            expect(errors).to.not.be.null;
            expect(errors).to.have.property('email');
            expect(errors).to.have.property('password');
            expect(errors).to.have.property('confirmPassword');
            expect(errors.email).to.equal('Invalid email format');
            expect(errors.confirmPassword).to.equal('Passwords do not match');
        });

        it('should properly evaluate password strength', () => {
            // Test Case 2: Password strength evaluation
            const weakPassword = 'password123';
            const strongPassword = 'Test123!@';
            
            const weakResult = checkPasswordStrength(weakPassword);
            const strongResult = checkPasswordStrength(strongPassword);
            
            // Test weak password
            expect(weakResult.isStrong).to.be.false;
            expect(weakResult.score).to.be.lessThan(4);
            
            // Test strong password
            expect(strongResult.isStrong).to.be.true;
            expect(strongResult.score).to.equal(5);
            
            // Test specific requirements
            expect(/[A-Z]/.test(strongPassword)).to.be.true; // Has uppercase
            expect(/[a-z]/.test(strongPassword)).to.be.true; // Has lowercase
            expect(/[0-9]/.test(strongPassword)).to.be.true; // Has number
            expect(/[!@#$%^&*]/.test(strongPassword)).to.be.true; // Has special char
        });
    });
});
