import { Request, Response } from "express";

export const getProducts = async ( request: Request, response: Response  ): Promise<Response>  =>{
    console.log("Get products..");

    return response.status(200).json( [ {name: "product 1"}, {name: "product 2"} ] );
}

export const getProductById = async( request: Request, response: Response  ): Promise<Response> =>{
    console.log("Get product by id");

    const id = request.params.id;

    console.log(`id is ${id}`);

    return response.status(200).json({name:"The product", id });
}


export const saveProduct = async ( request: Request, response: Response ) : Promise<Response> =>{
    
    const data = request.body;
    data.msg = "product saved";

    console.log( data );

    return response.status(201).json( data );
}


export const updateProduct = async ( request: Request, response: Response ) : Promise<Response> =>{
    const id =  request.params.id;

    console.log(`id to update ${id}`);

    const data = request.body;


    return response.status(200).json(data);

}

export const deleteProduct = async (  request: Request, response: Response ): Promise<Response> =>{
    const id = request.params.id;
    console.log(`id to delete  ${id}`);
    return response.status(200).json({msg: "product delete "});
}


