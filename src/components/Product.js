import React from "react";
import { Link } from "react-router-dom";
import "./mystyle.css";

// Redux
import { connect } from "react-redux";
import {
  loadCurrentItem,
  addToCart,
} from "../redux/Shopping/actions/shopping-actions";

const Product = ({ product, addToCart, loadCurrentItem }) => {
  return (
    <div className="product">
      <img className="product__image" src={product.image} alt={product.title} />

      <div className="product__details">
        <p className="details__title">{product.title}</p>
        <p className="details__desc">{product.description}</p>
        <p className="details__price">Rs/- {product.price}</p>
      </div>

      <div className="product__buttons">
        <Link to={`/product/${product.id}`}>
          <button
            onClick={() => loadCurrentItem(product)}
            className="buttons__btn styles.buttons__view"
          >
            View Item
          </button>
        </Link>
        <button
          onClick={() => addToCart(product.id)}
          className="buttons__btn buttons__add"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(Product);
