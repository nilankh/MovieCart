import React, { Component } from "react";

export class CartItem extends Component {
  increaseQuantity = () => {
    // console.log(this.state);
    // setSate form1(when we don't require prev state)
    // this.setState({
    //   qty: this.state.qty + 1,
    // });

    // setsate form 2(when we need prev state then we will use this)
    this.setState(
      (prevState) => {
        return {
          qty: prevState.qty + 1,
        };
      },
      () => {
        console.log(this.state);
      }
    );
  };

  decreaseQuantity = () => {
    if (this.state.qty == 0) {
      return;
    }
    this.setState({
      qty: this.state.qty - 1,
    });
  };
  render() {
    console.log("this.props", this.props);
    const { price, title, qty } = this.props.product;
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
              onClick={this.increaseQuantity}
            />
            <img
              alt="decrease"
              className="action-icons"
              src="https://image.flaticon.com/icons/svg/1828/1828906.svg"
              onClick={this.decreaseQuantity}
            />
            <img
              alt="delete"
              className="action-icons"
              src="https://image.flaticon.com/icons/svg/1214/1214428.svg"
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
