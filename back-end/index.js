import express from "express";
import cors from 'cors';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 3000;

app.post('/register', async (req, res) => {
    const {email, password, account, bank} = req.body;
    try {
        const user = await prisma.user.create({data: {email, password, account, bank}});
        res.json(user);
    } catch (e) {
        console.log(e)
        res.status(400).json({message: "user already exists"});
    }
    
})

app.post("/login", async (req, res) => {
    const {email, password} = req.body;
    try {
         const user = await prisma.user.findUniqueOrThrow({where:{email, password}});
        res.json(user);
    } catch {
        res.status(404).json({message: "user does not exist"});
    }
})
app.delete("/delete/:id",async (req,res) => {
        const{ id } = req.body;
        console.log(id);   
});


app.listen(3000, () => {
    console.log(lisning on ${3000})
})