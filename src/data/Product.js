import serum from "../assets/serum.jpeg";
import lipstick from "../assets/lipstick.jpeg";
import shampoo from "../assets/shampoo.jpeg";
import perfume from "../assets/parfum.jpeg";

const products = [
  {
    id: 1,
    name: "Hydrating Face Serum",
    category: "Skincare",
    price: 15000,
    rating: 5,
    image: serum,
    isBestSeller: true,
  },
  {
    id: 2,
    name: "Matte Lipstick",
    category: "Makeup",
    price: 8000,
    rating: 4,
    image: lipstick,
    isBestSeller: true,
  },
  {
    id: 3,
    name: "Repair Shampoo",
    category: "Haircare",
    price: 12000,
    rating: 5,
    image: shampoo,
    isBestSeller: true,
  },
  {
    id: 4,
    name: "Rose Perfume",
    category: "Fragrance",
    price: 25000,
    rating: 5,
    image: perfume,
    isBestSeller: true,
  },
  {
    id: 5,
    name: "Rose Perfume",
    category: "Fragrance",
    price: 35000,
    rating: 6,
    image: perfume,
    isBestSeller: true,
  },
];

export default products;