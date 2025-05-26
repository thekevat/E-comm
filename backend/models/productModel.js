import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: Array, required: true },
    category: { type: String, },
    subCategory: { type: String},
    sizes: { type: Array },
    bestseller: { type: Boolean },
    date: { type: Number, required: true },
    embedding: { type: [Number] }
})

const productModel  = mongoose.models.product || mongoose.model("product",productSchema);

export default productModel