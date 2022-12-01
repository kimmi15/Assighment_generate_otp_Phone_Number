
const mongoose = require("mongoose");


// connect with mongodb
exports.connectMongo = async () => {
  mongoose.connect("mongodb+srv://kimmi_kumari:kimmi@cluster0.mfdc6.mongodb.net/kimmi-Interviewround-2?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
)
.then(() => console.log("MongoDb is connected"))
.catch((err) => console.log(err));

};

