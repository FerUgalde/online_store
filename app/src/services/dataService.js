import axios from "axios";

const data = [
  {
    title: "Hoop",
    price: 120.65,
    category: "aerial",
    image: "hoop.jpg",
    _id: "1",
  },
  {
    title: "Cube",
    price: 170.99,
    category: "aerial",
    image: "cube.png",
    _id: "2",
  },
  {
    title: "Spiral",
    price: 195.1,
    category: "aerial",
    image: "spiral.jpg",
    _id: "3",
  },
  {
    title: "Trapeze",
    price: 97.89,
    category: "aerial",
    image: "trapeze.jpg",
    _id: "4",
  },
  {
    title: "Pole",
    price: 91.02,
    category: "static",
    image: "pole.jpeg",
    _id: "5",
  },
  {
    title: "Lolipop Hoop",
    price: 90.16,
    category: "static",
    image: "lolipop_hoop.jpg",
    _id: "6",
  },
  {
    title: "Aerial Pole",
    price: 89.99,
    category: "aerial",
    image: "aerial_pole.jpg",
    _id: "7",
  },
];

class DataService {
  async getCatalog() {
    // without a server
    // return data;

    // call the server
    let response = await axios.get("http://127.0.0.1:5000/api/products");
    return response.data;
  }

  async saveProduct(product) {
    let response = await axios.post(
      "http://127.0.0.1:5000/api/products",
      product
    );
    return response.data;
  }
}

export default DataService;
