import  express, { Request, Response }  from "express";
import { prisma } from "./db/db";

export const app = express()
app.use(express.json())
app.post("/addUser",async(req :Request,res :Response)=>{
    const {name, age, gender} = req.body;

    if(!name || !age || !gender){
        res.status(411).json({
            "error" : "Inputs missing"
        });
        return
    }

    const user = await prisma.user.create({
        data : {
            name,
            age,
            gender
        }
    })

    res.status(201).json({
        "message" : "User created Successfully",
        id : user.id
    });

})