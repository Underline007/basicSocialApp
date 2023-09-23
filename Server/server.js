const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const connectDB = require("./config/db");



//DOTENV
dotenv.config();

// MONGODB CONNECTION
connectDB();

//REST OBJECT
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));


//router
app.get('/', (req, res) => {
    res.status(200).send({
        "success": true,
        "message": "Welcome Dzung"
    });
});

app.use("/api/v1/auth", require("./routers/userRouter"));
app.use("/api/v1/post", require("./routers/postRouter"));


//PORT
const PORT = process.env.PORT || 8080;

//listen
app.listen(PORT, () => {
    console.log(`Server Running ${PORT}`.bgGreen.white);
});

