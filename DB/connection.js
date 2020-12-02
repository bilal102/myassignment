
const mongoose = require("mongoose");

const URI =
  "mongodb+srv://irtaza123:irtaza123@cluster0.rwtza.mongodb.net/<dbname>?retryWrites=true&w=majority";

const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log("Connection Established");
};

module.exports = connectDB;