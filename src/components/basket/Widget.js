import React from "react";

// import { connect } from "react-redux";

const BasketWidget = props => {
    console.log(props.basket, 'basket')
  return (
    <div className="basketWidget">
      <h1>Basket widget</h1>
      {props.basket.map(item => {
          return (
          <div key={item.id}>{item.productName}</div>);
        })}
    </div>
  );
};

export default BasketWidget;
