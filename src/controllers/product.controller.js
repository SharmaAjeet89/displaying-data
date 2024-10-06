// Import the necessary modules here
import ProductModel from "../models/product.model.js";
const productmodel = new ProductModel();

export default class ProductController {
  getProducts = (req, res) => {
    //  Write your code here
    const products = productmodel.fetchProducts();
    res.send(products);
  };
}
