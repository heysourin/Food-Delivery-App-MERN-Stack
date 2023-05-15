const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/FoodOP";
// const mongoURI =  "mongodb+srv://rylephoenix:ryle@123@cluster0.pemwtyj.mongodb.net/?retryWrites=true&w=majority";
const mongoDB = async () => {
  await mongoose.connect(mongoURI, { useNewUrlParser: true }, (err, result) => {
    if (err) console.log("Error", err);
    else {
      console.log(`Connected to ${mongoURI}`);
    }
  });
};

module.exports = mongoDB;
