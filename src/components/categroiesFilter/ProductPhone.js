import React, { useEffect, useState } from "react";
import CardProductsList from "../cardProducts/CardProductsList";

const categoriesproduct =
  "https://academy-products.herokuapp.com/api/products/category";
const ProductPhone = () => {
  const [categorieProducts, setCategorieProducts] = useState([]);
  useEffect(() => {
    fetch(`${categoriesproduct}/1`)
      .then((res) => res.json())
      .then((data) => setCategorieProducts(data.data));
  }, []);
       
  return (
    <div>
      <div className="card-div">
       <CardProductsList list={categorieProducts} />
      </div>
    </div>
  );
};

export default ProductPhone;
