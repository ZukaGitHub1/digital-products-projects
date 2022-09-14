import React from "react";

function CardProductsdesign({ products }) {
  const { img, title, price } = products;
  return (
    <div>
      <div className="card">
        <div className="imgBox">
          <img src={img} alt="img-sound" className="mouse" />
        </div>

        <div className="contentBox">
          <h4>{title}</h4>
          <h2 className="price">{price} €</h2>
          <button className="buy">მეტის ნახვა</button>
        </div>
      </div>
    </div>
  );
}

export default CardProductsdesign;
