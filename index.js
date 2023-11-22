const express = require("express")

const app = express();

app.get("/",(req,res)=>{
    res.send("API endpoint working!")
})

app.get("/public",(req,res)=>{
    res.send("public route!")
})

app.listen(3000,()=>{
    console.log("port running!");
})