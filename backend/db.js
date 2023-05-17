const mongoose = require("mongoose");
//  const mongoURI = "mongodb://localhost:27017/FoodOP";
const mongoURI =
  "mongodb+srv://rylephoenix:eZYNTiSaCnDQEIYf@cluster1.siovoyw.mongodb.net/FoodOP?retryWrites=true&w=majority";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true });
    console.log(`Connected to ${mongoURI}`);
    
    const fetchedData = await mongoose.connection.db.collection("foodCategory");
    const data = await fetchedData.find({}).toArray();
    console.log(data);
  } catch (err) {
    console.log("Error", err);
  }
};

module.exports = mongoDB;

// const mongoDB = async () => {
//   await mongoose.connect(
//     mongoURI,
//     { useNewUrlParser: true },
//     async (err, result) => {
//       if (err) console.log("Error", err);
//       else {
//         console.log(`Connected to ${mongoURI}`);
//         const fetchedData = await mongoose.connection.db.collection("foodData");
//         fetchedData.find({}).toArray(function (err, data) {
//           if (err) console.log(err);
//           else console.log(data);
//         });
//       }
//     }
//   );
// };