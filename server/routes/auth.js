const express = require('express');

const router = express.Router()

let users = [] ;

router.get('/' , (req,res,next)=>{
    res.json({ users: users })
})

router.post('/signup' , (req,res,next)=>{
    const newUser = { id : new Date().toISOString() , name : req.body.name , email : req.body.email , password : req.body.password }
    users.push(newUser)
    res.json({ message : "new User added" , userDetails : newUser})
})

router.post('/signin', (req,res,next)=>{
    const email = req.body.email;
    const password = req.body.password;
    const userIndex = users.findIndex((user)=>{
        // console.log("index fteched")
        return user.email === email 
    })
    // if(userIndex == -1){
    //    return res.json({ message : " invalid email "})
    // }
    
    res.json({ message : "user fetched" , user : users[userIndex] })
})



module.exports = router;