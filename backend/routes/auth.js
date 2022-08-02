const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');


const JWT_SECRET = 'Amitisagoodb$oy'
//Route:1 Create a user using: Post "/api/auth/createUser". No login required
router.post('/createUser',[
    body('name','Enter the valid name').isLength({ min: 3 }),
    body('email','Enter the valid email').isEmail(),
    body('password','Password must be atleast 7 charactor').isLength({ min: 7 }),
], async (req, res) =>{
    let success = false;
    // if there are errors, return Bad request and the error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success, errors: errors.array() });
    }
    // Check the wheather user with this email already exists
    try{
        let user = await User.findOne({email: req.body.email})
        if(user){
            return res.status(400).json({ success, errors:"Sorry a user with this email already exists"});

        }
        const salt = await bcrypt.genSalt(10)
        const secPass = await bcrypt.hash(req.body.password, salt)

        // create a new user
            user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass,
          })
          const data = {
              user:{
                  id: user.id
              }
          }
          const authtoken  = jwt.sign(data,  JWT_SECRET);

            success = true;
            res.json({success,authtoken})
    }
    catch(error){
        console.error(error.message);
        res.status(500).send("Internal server error occured")
    }

}   )

//Route:2 Create a user using: Post "/api/auth/login". No login required
router.post('/login',[
    body('email','Enter the valid email').isEmail(),
    body('password','password cannot be blank').exists(),
], async (req, res) =>{
    let success = false;
    // if there are errors, return Bad request and the error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const {email,password} = req.body;
    try {
        // Check the user if the user already exists than gave this error
        let user = await User.findOne({email});
        if(!user){
            success = false
            return res.status(400).json({ errors:"Please try to login with correct account"});
        }
        // check the user password was correct or not
        const passwordcompare = await bcrypt.compare(password,user.password);
        if(!passwordcompare){
            success = false
            return res.status(400).json({ success, errors:"Please try to login with correct password"});
        }

        const data = {
            user:{
                id: user.id
            }
        }
        const authtoken  = jwt.sign(data, JWT_SECRET);
        success = true;
        res.json({ success,authtoken})
    
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error")
    }
});

//Route:3 Create a user using: Post "/api/auth/getuser".login required
router.post('/getuser',fetchuser, async (req, res) =>{
try { 
    userId = req.user.id;
    const user = await User.findById(userId).select("-password ")
    res.send(user)
} catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error") 
}

})

module.exports = router