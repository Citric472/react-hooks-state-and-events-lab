import React, { useState } from "react";
import Item from "./Item";
import items from "../data/items";

function ShoppingList() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredItems =
    selectedCategory === "all"
      ? items
      : items.filter((item) => item.category === selectedCategory);

  return (
    <div>
      <select value={selectedCategory} onChange={handleCategoryChange} role="combobox">
        <option value="all">All Categories</option>
        <option value="Dairy">Dairy</option>
        <option value="Produce">Produce</option>
        <option value="Dessert">Dessert</option>
        {/* Add options for other categories based on your data */}
      </select>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
