import React, { useState } from "react";
import "./mystyle.css";

import { connect } from "react-redux";
import {
  adjustItemQty,
  removeFromCart,
} from "../redux/Shopping/actions/shopping-actions";

const CartItem = ({ item, adjustQty, removeFromCart }) => {
  const [input, setInput] = useState(item.qty);

  const onChangeHandler = (e) => {
    setInput(e.target.value);
    adjustQty(item.id, e.target.value);
  };

  return (
    <div className="cartItem">
      <img className="cartItem__image" src={item.image} alt={item.title} />
      <div className="cartItem__details">
        <p className="details__title">{item.title}</p>
        <p className="details__desc">{item.description}</p>
        <p className="details__price">Rs/- {item.price}</p>
      </div>
      <div className="cartItem__actions">
        <div className="cartItem__qty">
          <label htmlFor="qty">Qty</label>
          <input
            min="1"
            type="number"
            id="qty"
            name="qty"
            value={input}
            onChange={onChangeHandler}
          />
          {/* <i class="fas fa-minus-square"></i>
          <i class="fas fa-plus"></i> */}
        </div>
        <i
          className="fas fa-trash-alt actions__deleteItemBtn "
          onClick={() => removeFromCart(item.id)}
        ></i>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    adjustQty: (id, value) => dispatch(adjustItemQty(id, value)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
