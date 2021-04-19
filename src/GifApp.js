import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifApp = ({ defaultCategories = [] }) => {
  const [categories, setCategories] = useState(defaultCategories);

  return (
    <div>
      <h2>Gif App</h2>
      <AddCategory setCategories={setCategories} />
      <ul>
        {categories.map((category) => {
          return <GifGrid category={category} key={category} />;
        })}
      </ul>
    </div>
  );
};

export default GifApp
