import { Request, Response } from "express";
import Product from "../models/Product";

export const getProducts = async (request: Request, response: Response): Promise<Response> => {
    console.log("Load products..");

    try {
        const products =  await Product.find();

        return response.status(200).json( products );
    } catch (error) {
        return response.status(500).json(error);
    }

    
}

export const getProductById = async (request: Request, response: Response): Promise<Response> => {
    const id = request.params.id;
    console.log(`Get product by id  ${id}` );
    
    try {
        const wantedProduct = await Product.findById( id );
        return response.status(200).json( wantedProduct );
    } catch (error) {
        return response.status(500).json(error);    
    }
    
}


export const saveProduct = async (request: Request, response: Response): Promise<Response> => {

    console.log( "Creating product: ", request.body);

    try {
        const product = new Product(request.body);
        const savedProduct = await product.save();

        return response.status(201).json(savedProduct);
    } catch (error) {
        return response.status(500).json( error );
    }

    
}


export const updateProduct = async (request: Request, response: Response): Promise<Response> => {
    const id = request.params.id;
    const data = request.body;

    console.log(`id to update ${id}`);

    try {
        const updatedProduct = await Product.findByIdAndUpdate( id, data, { new: true } );

        return response.status(200).json(updatedProduct);
    } catch (error) {
        return response.status(500).json(error);    
    }


    

}

export const deleteProduct = async (request: Request, response: Response): Promise<Response> => {
    const id = request.params.id;
    console.log(`Delete product with id  ${id}`);

    try {
        const deletedProduct = await Product.findByIdAndDelete(id);

        return response.status(200).json( deletedProduct );
    } catch (error) {
        return response.status(500).json( error );    
    }

    
}


