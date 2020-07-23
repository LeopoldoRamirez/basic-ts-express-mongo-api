import {Router } from "express";
import { getProducts, getProductById, saveProduct, updateProduct, deleteProduct } from "../controllers/product.controllers";

const router = Router();

router.get('/products', getProducts );

router.get('/products/:id', getProductById );

router.post('/products', saveProduct );

router.put('/products/:id', updateProduct );

router.delete('/products/:id', deleteProduct );


export default router;