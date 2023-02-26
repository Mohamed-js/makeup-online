import React from "react";
import PropTypes from "prop-types";

const ProductShow = ({ product }) => (
  <div className="product-container">
    <div className="product-img-container">
      <img src={product.api_featured_image} alt={product.name} />
      <h3
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          padding: "15px",
          background: "#F56EB3",
        }}
      >
        ${product.price}
      </h3>
    </div>
    <div
      style={{
        padding: "15px",
      }}
    >
      <h2>{product.name.toUpperCase()}</h2>
      <h4>
        <span>{product.brand.toUpperCase()}</span>{" "}
        <span>{product.product_type.toUpperCase()}</span>
      </h4>

      <div className="colors">
        {product.product_colors.map((color) => (
          <span
            key={color.hex_value}
            className="color"
            style={{
              backgroundColor: color.hex_value,
            }}
          />
        ))}
      </div>

      <p>{product.description}</p>
    </div>
  </div>
);

export default ProductShow;

ProductShow.propTypes = {
  product: PropTypes.instanceOf(Object),
};

ProductShow.defaultProps = {
  product: {},
};
