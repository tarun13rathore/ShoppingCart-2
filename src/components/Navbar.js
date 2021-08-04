import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./mystyle.css";

import { connect } from "react-redux";

const Navbar = ({ cart }) => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);

  return (
    <div className="navbar">
      <Link to="/">
        <h2 className="navbar__logo">Redux Shopping Cart</h2>
      </Link>
      <Link to="/cart">
        <div className="container"></div>
        {cartCount === 0 ? (
          <i class="fas fa-cart-arrow-down cart__counter"></i>
        ) : (
          <i class="fas fa-cart-arrow-down cart__counter">{cartCount}</i>
        )}
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Navbar);
