const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const jwtSecret = "iamendtoendencryptedwiththeserandomkeywords123";
// @note Signup
router.post(
  "/createuser",
  [
    body("email").isEmail(),
    body("name").isLength({ min: 5 }),
    body("password", "incorct pwd").isLength({ min: 5 }),
  ],

  async (req, res) => {
    // console.log(
    //   req.body.name,
    //   req.body.email,
    //   req.body.password,
    //   req.body.location
    // );

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const salt = await bcrypt.genSalt(10);
    let secPassword = await bcrypt.hash(req.body.password, salt);
    try {
      await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPassword,
        location: req.body.location,
      });

      res.json({ success: true }); //To notify: update successful
    } catch (error) {
      res.json({ success: false });

      console.error("hehe", error);
    }
  }
);

router.post(
  "/loginuser",
  [
    body("email").isEmail(),
    body("password", "incorct pwd").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let email = req.body.email;
    try {
      let userData = await User.findOne({ email });

      if (!userData) {
        return res
          .status(400)
          .json({ errors: "Try logging with correct credentials" });
      }

      const pwdCompare = await bcrypt.compare(
        req.body.password,
        userData.password
      );
      if (!pwdCompare) {
        return res
          .status(400)
          .json({ errors: "Try logging with correct credentials" });
      }

      const data = {
        user: {
          id: userData.id,
        },
      };
      const authToken = jwt.sign(data, jwtSecret);
      return res.json({ success: true, authToken });
    } catch (error) {
      res.json({ success: false });

      console.error("hehe", error);
    }
  }
);
module.exports = router;
/**
 *  
      name: req.body.name,
      location: req.body.location,
      email: req.body.email,
      password: req.body.password,

      name: "Ryle Phoenix",
      location: "Mars",
      email: "asar@afg.as",
      password: "3rdqlwk",


 */
