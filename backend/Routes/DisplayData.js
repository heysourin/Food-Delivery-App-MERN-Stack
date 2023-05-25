const express = require("express");
const router = express.Router();
// const mongoose = require("mongoose");

router.post("/foodData", async (req, res) => {
  try {
    res.send([global.foodData, global.foodCategory]);
  } catch (error) {
    console.error(error);
    res.send("Server error");
  }
});

module.exports = router;

// const fetchedData = await mongoose.connection.db.collection("foodData");
// const data = await fetchedData.find({}).toArray();
// console.log(data);
// res.send([data]);
