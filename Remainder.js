const express = require('express');
const nodemailer= require('nodemailer');

const app =express();



app.listen("3000" ,function(request ,response){
    console.log("Server Started");
})

 const mailOptions={
     from :'onlineshare83@gmail.com',
     to : '2003010090@ipec.org.in',
     subject : 'happy birthday diya',
    text:'Give me a party'

 };

 const transporter = nodemailer.createTransport({
     service: 'gmail',
     auth :{
         user : 'onlineshare83@gmail.com',
         pass : 'yashraj@123'
     }
 });


//send email



 transporter.sendMail(mailOptions,(error,info)=>{
     if(error){
         console.log(error);
     }
     else{
         console.log('email sent' + info.response);
     }
 });

