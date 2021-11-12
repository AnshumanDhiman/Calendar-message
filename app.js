const request = require("request");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const https = require("https");

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res) {
    res.sendFile(__dirname + "/Remainder.html");
});

app.post("/",function(req,res){
    const firstName = req.body.fName;
    const Date = req.body.lName;
    const Email = req.body.mail;
    const Message = req.body.msg;


    const data = {
        members: [
            {
                email_address: Email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: LastName,
                    MESSAGE: Message
                }
            }
        ]
    };
    const jsonData = JSON.stringify(data);

    const url = "https://us20.api.mailchimp.com/3.0/lists/d6f06b09f5";    

    const options = {
        method : "POST",
        auth : "diya:cd4028c5d8a7562c125b132c856357b4-us20"
    }

    const request = https.request(url,options,function(response) {
        if(response.statusCode===200) {
            res.sendFile(__dirname + "/success.html");
        }
        else {
            res.sendFile(__dirname + "/failure.html");
        }

        response.on("data",function(data){
            // console.log(JSON.parse(data));
        })
    })

    request.write(jsonData);
    request.end();

});

app.post("/failure",function(req,res){
    res.redirect("/");
})



app.listen(process.env.PORT || 5501,function() {
    console.log("Server is running on port 5501");
})



//d8140648241d27eb570cf84aaae7467e-us5
//57cfea682e


// const express = require('express');
// const nodemailer= require('nodemailer');
// const cron =require('node-cron');

// const app =express();



// app.listen("3000" ,function(request ,response){
//     console.log("Server Started");
// })

//  const mailOptions={
//      from :'onlineshare83@gmail.com',
//      to : '2003010090@ipec.org.in',
//      subject : 'happy birthday diya',
//     text:'hello haay'

//  };

//  const transporter = nodemailer.createTransport({
//      service: 'gmail',
//      auth :{
//          user : 'onlineshare83@gmail.com',
//          pass : 'yashraj@123'
//      }
//  });


// //send email



//  transporter.sendMail(mailOptions,(error,info)=>{
//      if(error){
//          console.log(error);
//      }
//      else{
//          console.log('email sent' + info.response);
//      }
//  });

