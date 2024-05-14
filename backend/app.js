import express from "express";
import fs from "fs";

const app = express()
const PORT = process.env.PORT || 5001

app.get("/", (req, res) => {
    res.send(readDatabase())
})

const readDatabase = () => {
    try {
        const data = fs.readFileSync("./db.json")
        const students = JSON.parse(data)
        return students
    } catch (error) {
        console.log("File not working", error);
        return { students: [] };

    }
}

console.log(readDatabase())

app.listen(PORT, () => {
    console.log(`Server listen ${PORT}`);
})