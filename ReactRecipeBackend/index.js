const express = require("express");
const app = express();
const connectDb = require("./db/db");
const dotenv = require("dotenv");
const cors = require("cors")

dotenv.config();

connectDb()
  .then(() => {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error while connecting to MongoDB:", error);
  });

app.use(cors({
    origin: '*',
    credentials:true
}))


app.get("/post",(req,res)=>{
    console.log("req is",req.params)
    return res.status(200).json({
        success:true,
        data:"Hello world"
    })
})
