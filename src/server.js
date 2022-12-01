require("dotenv").config()// avialble env variable
const express = require("express");
const { connectMongo } = require("./utils/mongo");    // monogoose connection
const authRoutes = require("./routes/auth");   //roue path
const { notFoundErrorHandler, globalErrorHandler} = require("./middlewares/error");    //error handling (1000 routes 1000  time)
const app = express();

const PORT = process.env.PORT
// parse incomming request into json
app.use(express.json());   

// server health check
app.get("/", (req, res) => {
  res.status(200).json({
    type: "success",
    message: "server is up and running",
    data: null,
  });
});

// register auth routes
app.use("/api/auth", authRoutes);

// api route not found error handling
app.use("*", notFoundErrorHandler);

//global error handler
app.use(globalErrorHandler);

async function main() {
  try {
    await connectMongo();
    // start express server
    app.listen(PORT, () => console.log(`listening on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
}

main();   
