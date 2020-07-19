import React, { Component } from "react";

export class CartItem extends Component {
  render() {
    console.log("this.props", this.props);
    const { price, title, qty } = this.props.product;
    const {
      product,
      onIncreaseQuantity,
      onDecreaseQuantity,
      onDeleteProduct,
    } = this.props;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} />
        </div>
        <div className="right-block">
          <div style={{ fontSize: 25 }}>{title}</div>
          <div style={{ color: "#777" }}>Rs {price}</div>
          <div style={{ color: "#777" }}>Qty: {qty}</div>
          <div className="cart-item-actions">
            {/* buttons */}
            <img
              alt="increase"
              className="action-icons"
              src="https://image.flaticon.com/icons/svg/992/992651.svg"
              // one way of binding
              //   onClick={this.increaseQuantity.bind(this)}
              onClick={() => onIncreaseQuantity(product)}
            />
            <img
              alt="decrease"
              className="action-icons"
              src="https://image.flaticon.com/icons/svg/1828/1828906.svg"
              onClick={() => onDecreaseQuantity(product)}
            />
            <img
              alt="delete"
              className="action-icons"
              src="https://image.flaticon.com/icons/svg/1214/1214428.svg"
              onClick={() => onDeleteProduct(product.id)}
            />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: "#ccc",
  },
};
export default CartItem;
