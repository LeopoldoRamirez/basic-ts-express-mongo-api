import { Router } from "express";
import productRouter from "./product.routes";

const router = Router();

// Define your routers
router.use('/api/products', productRouter);


// Define your default routers
router.get('/', ( request, response )=>{
    response.send('Default Product API');
});

export default router;

