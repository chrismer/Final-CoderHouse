const routerCart = require("express").Router();
const { isAdmin } = require("../handlers/isAdmin")
const { verifyToken  } = require("../middlewares/verifyToken");
const { createCart, addProductsToCart, deleteCart, getCartByID, getAllCarts} = require('../controllers/Carts.controllers')



routerCart
.post("/", verifyToken, createCart)
.put("/:id", verifyToken, addProductsToCart)
.delete("/:id", verifyToken , deleteCart )
.get("/find/:cartId", verifyToken,getCartByID)
 //SOLO SI SOS ADMIN 
.get("/", isAdmin, getAllCarts );

module.exports = routerCart;