import {it,expect, describe} from "vitest";
import { app } from "..";
import request from "supertest"


describe("Add user to the database",()=>{
    it("should be successfull",async()=>{
        const user = await request(app).post("/addUser").send({
            name : "Abhijit",
            age : 12,
            gender : "male"
        }) 
        expect(user.body.message).toBe("User created Successfully");
        expect(typeof user.body.id).toBe("number");
        expect(user.statusCode).toBe(201);
    })
    
})