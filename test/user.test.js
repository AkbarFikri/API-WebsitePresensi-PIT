import supertest from "supertest";
import { createTestUser, deleteTestUser } from "./utils";
import { app } from "../src";
import { response } from "express";


describe('GET /users', function() {
    beforeEach(async () => {
        await createTestUser;
    })

    afterEach(async () => {
        await deleteTestUser;
    })

   it('should return all user', async () => {
        const result = await supertest(app)
            .get('/users')
    
        expect(response.status).toBe(200);
        expect(response.body.data.nama).toBe("test");
   })

   
});