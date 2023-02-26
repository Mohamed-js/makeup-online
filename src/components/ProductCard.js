import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ProductCard = ({ item }) => (
  <div className="card" style={{ position: "relative" }}>
    <Link
      to={`/product/${item.id}`}
      style={{ display: "flex", flexDirection: "column", height: "100%" }}
    >
      <div className="img-holder">
        <img alt={item.name} src={item.api_featured_image} />
        <p className="card-price">
          <strong>${item.price}</strong>
        </p>
      </div>
      <h5 className="card-name">{item.name}</h5>
      {item.brand && <p className="card-brand">{item.brand}</p>}
      {item.category && <p className="card-category">{item.category}</p>}
    </Link>
  </div>
);

export default ProductCard;

ProductCard.propTypes = {
  item: PropTypes.instanceOf(Object),
};

ProductCard.defaultProps = {
  item: {},
};
