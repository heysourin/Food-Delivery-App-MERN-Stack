const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");

router.post(
  "/createuser",
  [
    body("email").isEmail(),
    body("name").isLength({ min: 5 }),
    body("password", "incorct pwd").isLength({ min: 5 }),
  ],

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      await User.create({
        name: req.body.name,
        location: req.body.location,
        email: req.body.email,
        password: req.body.password,
      });

      res.json({ success: true }); //To notify update successful
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
