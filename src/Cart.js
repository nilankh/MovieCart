import React, { Component } from "react";
import CartItem from "./CartItem";

class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [
        {
          price: 999,
          title: "Mobile Phone",
          qty: 1,
          img: "",
          id: 1,
        },
        {
          price: 99,
          title: "Watch",
          qty: 1,
          img: "",
          id: 2,
        },
        {
          price: 45000,
          title: "Laptop",
          qty: 1,
          img: "",
          id: 3,
        },
      ],
    };
  }
  handleIncreaseQuantity = (product) => {
    console.log("Hey please inc the qty of ", product);
    const { products} = this.state;
    const index = products.indexOf(product)
    products[index].qty += 1
    this.setState({
        products
    })
};
  render() {
    const { products } = this.state;
    return (
      <div className="cart">
        {products.map((product) => {
          return (
            <CartItem
              product={product}
              key={product.id}
              onIncreaseQuantity={this.handleIncreaseQuantity}
            />
          );
        })}
      </div>
    );
  }
}

export default Cart;
