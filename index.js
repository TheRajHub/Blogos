
import express from "express";
const app=express();
import {dirname} from "path";
import { fileURLToPath } from "url";
const _dirname=dirname(fileURLToPath(import.meta.url));
app.use(express.static(_dirname+"\\public"))
app.get("/",(req,res)=>{
    res.render(_dirname+"\\views\\index.ejs");
});
app.listen(5000,()=>{
    console.log("Running on 5000..");
});