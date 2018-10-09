const server = require('./server').app;
const expect = require('expect');

const superTest = require('supertest');

describe('Server', () => {

    describe('Get /', () => {
        it('should return hello world', (done) => {
            superTest(server)
            .get('/')
            .expect(404)
            .expect((res) => {
                expect(res.body).toInclude({
                    error: 'page not found'
                });
            })
            .end(done);
        });
    });

    describe('Get /Users', () => {
        it('should return users list', (done) => {
            superTest(server)
            .get('/users')
            .expect(200)
            .expect((res) => {
                expect(res.body).toInclude({
                    name: 'Ankit',
                    age: 26
                });
            })
            .end(done);
        });
    });

});
