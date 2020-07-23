import { Document, Schema, model } from "mongoose";

// Define the interface to TypeScript
export interface IProduct extends Document  {
    productName :string,
    productId : string,
    price: number,
    isActive: boolean
}

// The schema is used to mongoose to communicate with DB
const productSchema = new Schema({
    productName : {
        type: String,
        required: true
    },
    productId : {
        type: String,
        required: true
    },
    price : {
        type: Number,
        required: true
    },
    isActive :{
        type: Boolean,
        required:false
    }
});

export default model('Product', productSchema);
