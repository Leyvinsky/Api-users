const mongoose = require('mongoose');
const supertest = require('supertest');
const router = require('../src/routes/users');
const Server = require('../src/models/server');

const api =supertest(router);

test('Users are returned as Json', async () => {
    await api
        .get('/users')
        .expect(200)
        .expect('Content-Type', /application\/json/)
});

test('There are two users', async () => {
    await api
        .get('/users')
        const response = await api.get('/users')
        expect(response.body).toHaveLenght(2)
});

afterAll(() =>{
    mongoose.connection.close()
    Server.listen.close()
})