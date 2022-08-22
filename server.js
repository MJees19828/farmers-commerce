const express = require("express");
require("dotenv").config()
const cors=require("cors");

const products = require("./datasource/products");
const connectDb = require("./Utils/connect.db");
connectDb();

const usersRouter=require("./routes/users.routes")
const productsRouteer=require("./routes/products.routes");


//initialize express object
const app = express(); 

// express middleware
app.use(express.json());
app.use(cors());

// routes
app.use("/api/users",usersRouter);
app.use("/api/products",productsRouteer);

//home route 
app.get("/", (req, res) => {
    res.send("<h1>Welcome to our farmers Db</h1>")

});

//get all products
app.get("/api/v1/products", (req, res) => {
  res.json({
    success: true,
    data:products,
  })
});

//save data to db
app.post("/api/v1/product", (req, res) =>{
  const product = req.body;
  const newProducts = products.push(product);

    res.json({
        success:true,
        data:[req.body, ...Products],
    });

});

const port = process.env.PORT

app.listen(port, ()=> {
    console.log("server started on port :" + port)
});