
import express from "express";
const app=express();
import {dirname} from "path";
import { fileURLToPath } from "url";
const _dirname=dirname(fileURLToPath(import.meta.url));
const port=process.env.POST|| 5000;
app.set("view engine","ejs");
var ob;
app.use(express.static(_dirname+"\\public"));
app.use(express.urlencoded({extended: true}));
app.get("/",(req,res)=>{
    res.render(_dirname+"\\views\\index.ejs");
});
app.get("/login",(req,res)=>{
    res.render(_dirname+"\\views\\login.ejs");
});
app.get("/profile",(req,res)=>{
    res.render(_dirname+"\\views\\profile.ejs",{ blogs: blogs });

});
app.post("/profile",(req,res)=>{
    var s={
        blogName:req.body["blogName"],
        blogDate:req.body["blogDate"],
        blog:req.body["blogPlace"]
    }
    blogs.push(s);
    res.render(_dirname+"\\views\\profile.ejs",{ blogs: blogs });
});
app.listen(port,()=>{
    console.log("Running.. on "+port);
});
var blogs=[
    {
        blogName:"First",
        blogDate:12-3-2023,
        blog:"HEY"
    },

    {
        blogName:"Second",
        blogDate:19-5-2023,
        blog:"How are"
    },

    {
        blogName:"Third",
        blogDate:20-10-2024,
        blog:"You"
    }
];