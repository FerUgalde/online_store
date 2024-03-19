import "./Catalog.css";
import Product from "../components/Product";

function Catalog() {
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

  return (
    <div className="catalog page">
      <h1>Our amazing catalog!!</h1>
      <Product info={data[0]} />
      <Product info={data[1]} />
      <Product info={data[2]} />
      <Product info={data[3]} />
      <Product info={data[4]} />
      <Product info={data[5]} />
      <Product info={data[6]} />
    </div>
  );
}

export default Catalog;
