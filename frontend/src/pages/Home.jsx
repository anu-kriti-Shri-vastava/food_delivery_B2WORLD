import React from "react";
import Navbar from "../components/Navbar";
import CategoryMenu from "../components/CategoryMenu";
import FoodItems from "../components/FoodItems";
import Cart from "../components/Cart";
import Hero from "../components/Hero/Hero";
const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <CategoryMenu />
      <FoodItems />
      <Cart />
    </>
  );
};

export default Home;
