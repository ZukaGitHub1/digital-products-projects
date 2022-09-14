import { useEffect, useState } from "react";

import CardProductsList from "./CardProductsList";
const allproductlink = "http://academy-products.herokuapp.com/api/products";
const CardProducts = () => {
  const [productsCard, setProductsCard] = useState([]);

  useEffect(() => {
    try {
      fetch(`${allproductlink}`)
        .then((res) => res.json())
        .then((product) => setProductsCard(product.data));
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div >
     
      <CardProductsList list={productsCard} />
    </div>
  );
};

export default CardProducts;
