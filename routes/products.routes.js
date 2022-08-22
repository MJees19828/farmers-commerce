const express = require("express");

const {  
  addProduct,
  getAllProdcuts,
  getProductById,
}=require("../controllers/products.controller");

const router= express.Router();

router.get("/.",getAllProdcuts);
router.post("/add",addProduct);
router.get("/:id",getProductById);
router.delete("/:id",deleteProduct);

modele.exports = router;