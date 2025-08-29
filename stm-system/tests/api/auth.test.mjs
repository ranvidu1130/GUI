import { expect } from 'chai';
import request from 'supertest';

const API_URL = 'http://localhost:3000';

describe('Authentication API Tests', () => {
    const testUser = {
        name: 'Test User',
        username: 'testuser' + Date.now(),
        email: `test${Date.now()}@example.com`,
        password: 'Test123!',
        confirmPassword: 'Test123!'
    };

    describe('POST /register', () => {
        it('should successfully register a new user', async () => {
            const response = await request(API_URL)
                .post('/register')
                .send(testUser)
                .expect('Content-Type', /json/)
                .expect(200);

            expect(response.body).to.have.property('id');
            expect(response.body.username).to.equal(testUser.username);
            expect(response.body.email).to.equal(testUser.email);
        });

        it('should return 400 when registering with existing username', async () => {
            // First registration
            await request(API_URL)
                .post('/register')
                .send(testUser);

            // Attempt to register same user again
            const response = await request(API_URL)
                .post('/register')
                .send(testUser)
                .expect('Content-Type', /json/)
                .expect(400);

            expect(response.body).to.have.property('message');
            expect(response.body.message).to.equal('user already exists');
        });
    });

    describe('POST /login', () => {
        before(async () => {
            // Ensure test user exists
            await request(API_URL)
                .post('/register')
                .send(testUser);
        });

        it('should successfully login with valid credentials', async () => {
            const response = await request(API_URL)
                .post('/login')
                .send({
                    username: testUser.username,
                    password: testUser.password
                })
                .expect('Content-Type', /json/)
                .expect(200);

            expect(response.body).to.have.property('id');
            expect(response.body.username).to.equal(testUser.username);
        });

        it('should return 404 with invalid credentials', async () => {
            const response = await request(API_URL)
                .post('/login')
                .send({
                    username: testUser.username,
                    password: 'wrongpassword'
                })
                .expect('Content-Type', /json/)
                .expect(404);

            expect(response.body).to.have.property('message');
            expect(response.body.message).to.equal('user does not exist');
        });
    });
});
