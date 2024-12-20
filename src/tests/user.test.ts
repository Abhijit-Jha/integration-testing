import {it,expect, describe, beforeAll} from "vitest";
import { app } from "..";
import request from "supertest"
import { resetDB } from "./helper/reset-db";


describe("Add user to the database",()=>{
    beforeAll(async()=>{
        console.log("😁 Clearing the Database...");
        await resetDB();
    })

    it("should be successfull",async()=>{
        console.log("Started Testing the Endpoint \"/addUser\" 😉..")
        const user = await request(app).post("/addUser").send({
            name : "Abhijit",
            age : 12,
            gender : "male"
        }) 
        expect(user.body.message).toBe("User created Successfully");
        expect(typeof user.body.id).toBe("number");
        expect(user.statusCode).toBe(201);
    })


    it("should Fail...",async()=>{
        console.log("Started Testing the Endpoint \"/addUser\" 😉..")
        const user = await request(app).post("/addUser").send({
            name : "",
            age : NaN,
            gender : ""
        }) 
        expect(user.body.error).toBe("Inputs missing");
        expect(user.statusCode).toBe(411);
    })
    
})