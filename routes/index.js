var express = require('express');
var router = express.Router();
var product=require("../models/product");
var check=require("../middlewares/checksessionauth");
/* GET home page. */
router.get('/home', async function(req, res, next) {
  let products= await product.find();
  res.render('products/home', {products});
});

router.get('/shop', function(req, res, next) {
  let shop= req.cookies.shop;
  if(!shop) shop=[];
  res.render("shop",{shop});
});
module.exports = router;
