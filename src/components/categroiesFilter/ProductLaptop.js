import React, { useEffect, useState } from 'react'
import CardProductsList from '../cardProducts/CardProductsList'
const categoriesproduct =
  "https://academy-products.herokuapp.com/api/products/category";
function ProductLaptop() {
    const [categorieProducts, setCategorieProducts] = useState([]);
    useEffect(() => {
      fetch(`${categoriesproduct}/3`)
        .then((res) => res.json())
        .then((data) => setCategorieProducts(data.data));
    }, []);
  return (
    <div>
    <CardProductsList list={categorieProducts}/>
    </div>
  )
}

export default ProductLaptop
