// Import the necessary modules here
import {products} from '../assets/products.js';

export default class ProductModel {
//   constructor(id,title,price,description,category,image,rating) {
//     this.id = id;
//     this.title = title;
//     this.price = price;
//     this.description = description;
//     this.category = category;
//     this.image = image;
//     this.rating = rating;
// }



  fetchProducts = () => {
    // Write your code here
    return products;
  };
  
}
