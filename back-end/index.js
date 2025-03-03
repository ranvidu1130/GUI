import express from "express";
import cors from 'cors';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 3000;

app.post('/register', async (req, res) => {
    const {name,username,email,password,confirmPassword} = req.body;
    try {
        const user = await prisma.user.create({data: {name,username,email,password,confirmpassword:confirmPassword}});
        res.json(user);
    } catch (e) {
        console.log(e);
        res.status(400).json({message: "user already exists"});
    }
    
})

app.post("/login", async (req, res) => {
    const {username, password} = req.body;
    try {
         const user = await prisma.user.findUniqueOrThrow({where:{username, password}});
        res.json(user);
    } catch {
        res.status(404).json({message: "user does not exist"});
    }
})
app.delete("/delete/:id",async (req,res) => {
        const{ id } = req.params;
        try {
            await prisma.user.findFirstOrThrow({where:{username: id}});
            await prisma.user.delete({where:{username: id}});
            res.status(200).json({message: "user deleted"});
        } catch {
            res.status(404).json({message: "user does not exist"});
        };   
});


app.listen(3000, () => {
    console.log(`lisning on ${PORT}`)
})