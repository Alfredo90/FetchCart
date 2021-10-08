import React, { Component } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
import "./Products.css";
import "./reset.css";

export class Products extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const { type, animal } = this.props.match.params;
    await axios.get(`/products/${type}/${animal}`).then((res) => {
      this.setState({
        products: res.data,
      });
    });
  }

  async componentDidUpdate(prevProps) {
    const { type, animal } = this.props.match.params;
    if (this.props.match.params !== prevProps.match.params) {
      await axios
        .get(`/products/${type}/${animal}`)
        .then((res) => this.setState({ products: res.data }));
    }
  }

  addToCart = (id) => {
    axios.post(`/cart/${id}`).then((res) => {
      this.setState({
        cart: res.data,
      });
    });
  };

  render() {
    console.log(this.props);

    const mappedProducts = this.state.products.map((products) => {
      return (
        <div className="bg">
          <div className="product-container" key={products.id}>
            <img className="product-images" alt="img" src={products.img} />
            <p className="product-description">{products.descript}</p>
            <p className="product-price">${products.price} </p>
            {/* <button
          className="product-addbtn"
          type="button"
          onClick={() => this.addToCart(products.id)}
          >
          Add To Cart
        </button> */}
          </div>
        </div>
      );
    });

    return <div className="map">{mappedProducts}</div>;
  }
}

export default Products;
