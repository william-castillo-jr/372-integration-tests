import app from "./../src/app.js";
import request from 'supertest';

describe('Products endpoint', () => {
    test('should be available', async () => {
        const response = await request(app)
            .get('/api/v1/product')
            .expect(200);
    })
    
    test('should return correct data', async () => {
        const response 
        = await request(app)
            .get('/api/v1/product')
            .expect(200);
    
        expect(response.body.status).toBe("success");
        expect(response.body.data).toEqual([
            { id: 1, name: "iPhone"},
            { id: 2, name: "Car"}
        ]);
    })
})