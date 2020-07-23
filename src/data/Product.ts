import { Schema, model, Document  } from "mongoose";

//Create an interface to TypeScript can get information 
export interface IProduct extends Document {
    productName : string,
    productId: string,
    productPrice: number,
    isActive: boolean
}

const productSchema = new Schema({
    productName: {
        type: String,
        required: true
    },
    productId: {
        type: String,
        required: true
    },
    productPrice : {
        type: Number,
        required: true
    },
    isActive:{
        type: Boolean,
        required: false
    } 
});


export default model('Product', productSchema);