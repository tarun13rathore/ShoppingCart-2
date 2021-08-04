import React from "react";
import "./mystyle.css";

// Redux
import { connect } from "react-redux";

import Product from "./Product";

const Products = ({ products }) => {
  return (
    <div className={products}>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Products);
