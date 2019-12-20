import React from "react";
import ReactDOM from "react-dom";
import StripeCheckout from 'react-stripe-checkout'
import './App.css';
import axios from 'axios';

function App() {
  const [product] = React.useState({
    name: "Tesla Roadster",
    price: 50000.00,
    description: "Cool car"
  });
  const handleToken = async token => {
    const response = await axios.post('http://localhost:8080/checkout',({
      token,
      product
    }))
    console.log(response.data)
  }

  return (
    <div className="container">
      <div className="product">
        <h1>{product.name}</h1>
        <h3>On Sale · ${product.price}</h3>
      </div>
      <StripeCheckout
          stripeKey='pk_test_YCKiZNUJu6tPsynYLPvtSzhr00AZuQKESe'
          token={handleToken}
          amount={product.price* 100}
          name={product.name}
      />
    </div>
  );
}

export default App
