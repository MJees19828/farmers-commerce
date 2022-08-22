const Product = require("../models/producta.model");

// Create and Save a new product 
async function addProduct( req, res){
  if (!req.body){
    
     res.status(400).send({
      message: "Content can be empty!"   
     });
  }
  const product = await Product.create(req.body);
  res,json({
    message:" Product added successfully",
    data: Product
  })
}

// Retrieve all products from the database.

async function getAllProducts(req,res) {
  const Producta=await Product.find({});
  res.json({
    message:"Products retrieved successfully",
    count: products.length,
    data:Products,deleteProduct
  });
}

// Find a single product with an id 

async function getProductById(req,res){
  const product = await Product.findById(req.params.id);
  res.json({
    message:"Product retrieved successfully",
    data: Product,
  })
}


// Update a product by the id in the request

// Delete a product with the specified id in the request
async function deleteProduct(req,res) { 
   await Product.findByDelete(req.params.id);
  res.json({
    message: "Product delete successfully",
  }) }
  


modele.exports={
  addProduct,
  getAllProducts,
  getProductById,
  deleteProduct,
};
