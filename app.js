const express = require("express");
const bodyparser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const { appendFile } = require("fs");


const homestartingcontent = "According to Tilaka-Manjari, composed by Bhoja's contemporary Dhanapala, Bhoja's feet had auspicious birthmarks indicating that he was fit to be a king. His uncle Munja (and his father's predecessor) loved him greatly, and appointed him as the king.Coinage of King Bhoja. Paramaras of Vidarbha.However, several later legendary accounts state that Munja was initially jealous of Bhoja, and tried to prevent him from becoming a king. For example, the 14th century Prabandha-Chintamani states that during the reign of Munja, an astrologer prophesied Bhoja's long reign. Munja, who wanted his own son to become the king, ordered Bhoja's killing. Bhoja was appointed as the king by the royal ministers after Munja's death. According to a Gujarati legend documented in Rasmala, Munja ordered Bhoja's murder, but later appointed him as the crown prince.";
const aboutstartingcontent = "According to Tilaka-Manjari, composed by Bhoja's contemporary Dhanapala, Bhoja's feet had auspicious birthmarks indicating that he was fit to be a king. His uncle Munja (and his father's predecessor) loved him greatly, and appointed him as the king.Coinage of King Bhoja. Paramaras of Vidarbha.However, several later legendary accounts state that Munja was initially jealous of Bhoja, and tried to prevent him from becoming a king. For example, the 14th century Prabandha-Chintamani states that during the reign of Munja, an astrologer prophesied Bhoja's long reign. Munja, who wanted his own son to become the king, ordered Bhoja's killing. Bhoja was appointed as the king by the royal ministers after Munja's death. ";

const contactstartingcontent = "According to Tilaka-Manjari, composed by Bhoja's contemporary Dhanapala, Bhoja's feet had auspicious birthmarks indicating that he was fit to be a king. His uncle Munja (and his father's predecessor) loved him greatly, and appointed him as the king.Coinage of King Bhoja. Paramaras of Vidarbha.However, several later legendary accounts state that Munja was initially jealous of Bhoja, and tried to prevent him from becoming a king. For example, the 14th century Prabandha-Chintamani states that during the reign of Munja, an astrologer prophesied Bhoja's long reign. "

let post = [];

const app = express();
app.use(bodyparser.urlencoded({extended:true}));
app.set("view engine","ejs");
app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("home",{
        homestartingcontent:homestartingcontent,
        post:post,

    });
})

app.get("/about",(req,res)=>{
    res.render("about",{
        aboutstartingcontent:aboutstartingcontent,
    });
})
app.get("/contact",(req,res)=>{
    res.render("contact",{contactstartingcontent:contactstartingcontent})
})

app.get("/compose",(req,res)=>{
    res.render("compose");
})
app.post("/compose",(req,res)=>{
    const object = {
        posttitle:req.body.posttitle,
        postbody:req.body.postbody
    }
    post.push(object)
    res.redirect("/")
    
})

app.get("/post/:name",(req,res)=>{
    const requesttitle = _.lowerCase(req.params.name);
    for(var i = 0;i<post.length;i++){
        const reqcheck = _.lowerCase(post[i].posttitle)
        if(requesttitle==reqcheck){
            res.render("post",{
                posttitle:post[i].posttitle,
                postbody:post[i].postbody
            })
        }
    }
})







app.listen(5000,()=>{
    console.log("server is running")
})