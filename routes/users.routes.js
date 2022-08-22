const express=require("express");

const { loginUser,creatAccount } = require("../controllers/users.controller");

const router=express.Router();

router.post("/register",creatAccount);
router.post("/login", loginUser);

module.exports=router;
