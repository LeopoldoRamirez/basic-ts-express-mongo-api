import { appPort } from "./config";
import express from "express";
import router from "./routes/index.routes";

import "./database";

export const init =  async ()=>{
    const app = express();

    //Define middlewares for express
    app.use( express.json() );
    app.use( express.urlencoded({ extended:false }) );
    
    //Routers
    app.use( router );

    await app.listen(appPort);

    console.log(`Listening on port ${appPort}`); 
}
