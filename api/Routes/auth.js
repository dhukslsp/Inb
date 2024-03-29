const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const fetchuser = require("../Middlewere/fetchuser");
const jutsecret = "Harryisagoodb$dy";
const bodyParser = require("body-parser");
// create a user using POST api/auth dosent require auth
router.post('/Create_User',
body('name').isLength({ min: 3 }).exists(),
body('email').isEmail().exists(),
body('password').exists(), async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    // check weather the user with the same e mail exists already
    let user = await User.findOne({ email: req.body.email })
    if (user) {
        res.status(400).json({ error: "error" });
    }
    else {
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);
        let user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass
        })

        const data = {
            user: {
                id: user.id
            }
        }
        const jwtData = jwt.sign(data, jutsecret)
        res.status(200).json({ jwtData });
    }

});
// This thing authenticate the user with post/API/Auth/Login
router.post('/Login',
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'The password cannoot be blanck').exists()
    , async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { email, password } = req.body;
        try {
            let user = await User.findOne({ email })
            if (!user) {
                return res.status(400).json({ error: "Please try to log in with correct credentials" })
            }
            const passwordCompare = await bcrypt.compare(password, user.password)
            if (!passwordCompare) {
                return res.status(400).json({ error: "Please try to log in with correct credentials" })
            }
            const data = {
                user: {
                    id: user.id
                }
            }
            const jwtData = jwt.sign(data, jutsecret)
            res.status(200).json({ jwtData });
        } catch (error) {
            console.error(error.message);
            res.status(500).send("The main Internal server error accoured");
        }
    }
)
router.post('/getuser', fetchuser, async (req, res) => {
    try {
        userId = req.user.id;
        const user = await User.findById(userId).select("-password");
        res.send(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
})
module.exports = router;