
//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js");

const app = express();

var itemList=["Buy food","Cook food","Eat food"];
let workList= [];
app.set("view engine","ejs"); 

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",function(req,res)
{
    //res.send("Hello");
    var day = date.getDay();

  res.render("list",{title:day , listItems:itemList});

});

app.get("/work",function(req,res)
{
    //res.send("Hello");


   res.render("list",{title:"Work" , listItems:workList});
});


app.get("/about",function(req,res)
{
    //res.send("Hello");


   res.render("about");
});


app.post("/",function(req,res)
{
    var item= req.body.newItem;
    console.log(req.body.list);
    if (req.body.list==="Work")
    {
        workList.push(item);
        res.redirect("/work");
    }
    else{
       
    itemList.push(item);
    res.redirect("/");
    }



});



app.listen(3000,function()
{
    console.log("Server Started on port 3000");
})