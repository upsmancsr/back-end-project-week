const server = require('./server.js');
const request = require('supertest');

describe('server', () => {
    describe('GET /', () => {
        it('should return status code 200(OK)', async () => {
            const response = await request(server).get('/');
            expect(response.status).toBe(200);
        });
    });

    describe('POST /notes', () => {
        it('should take a note object', async () => {
            const testNote = {
                title: "Test note title",
                content: "Test note content"
            };
            const response = await request(server)
                .post('/notes')
                .send(testNote);
            expect(response.body).toEqual(testNote);
        });
    });

});