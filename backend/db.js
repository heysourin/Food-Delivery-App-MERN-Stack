const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://rylephoenix:4j1Ii1TTZyyddaAQ@cluster0.t6gyzjr.mongodb.net/FoodOP?retryWrites=true&w=majority";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true });
    console.log(`Connected to mongoURI`);

    const fetchedData = await mongoose.connection.db.collection("foodData");
    fetchedData.find({}).toArray(async function (err, data) {
      const foodCategory = await mongoose.connection.db.collection(
        "foodCategory"
      );
      foodCategory.find({}).toArray(function (err, catData) {
        if (err) console.log(err);
        else {
          global.foodData = data;
          global.foodCategory = catData;
        }
      });
    });
    // console.log(fetchedData);
    // console.log(data);
    console.log(" DB Connected");
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

// 4j1Ii1TTZyyddaAQ
