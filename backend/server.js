require("dotenv").config();
const express = require("express");
const app = express();
const cors = require('cors')
const connectDb = require("./db/connect");

//routers
const authRouter = require("./routes/auth");
const userRouter = require('./routes/user-info')
//error handling

const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

app.use(cors())
app.use(express.json());

const port = process.env.PORT || 3000;

//routes

app.use("/auth", authRouter);
app.use("/user", userRouter)

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (error) {}
};

start();
