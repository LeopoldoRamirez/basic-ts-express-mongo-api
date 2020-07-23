import express from "express";
import productRoutes from "./routes/product.routes";
import "./database";

export const init =  async ()=>{
    const app = express();

    //Define middlewares for express
    app.use( express.json() );
    app.use( express.urlencoded({ extended:false }) );
    
    app.use( productRoutes );

    await app.listen(3000);

    console.log('listen in port 3000'); 
}



