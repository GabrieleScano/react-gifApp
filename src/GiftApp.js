import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GiftApp = () => {
  const [categories, setCategories] = useState(["javascript"]);

  return (
    <div>
      <h2>Gift App</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ul>
        {categories.map((category) => {
          return <GifGrid category={category} key={category} />;
        })}
      </ul>

      <hr />
    </div>
  );
};
