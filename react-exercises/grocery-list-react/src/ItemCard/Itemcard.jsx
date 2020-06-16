import React, { Component } from "react";
import "./ItemCard.css";

export class ItemCard extends Component {
  render() {
    return (
      <div className="itemCardContainer">
        <div className="itemCardContent">
          {console.log(
            this.props.dataProps.id,
            this.props.dataProps.alreadyBought
          )}
          <div
            className={`itemInfoSection ${
              this.props.dataProps.alreadyBought ? "purchased" : "notPurchased"
            }`}
          >
            <span style={{ float: "left" }}>{this.props.dataProps.name}</span>
            <span style={{ float: "right" }}>
              {this.props.dataProps.quantity}
            </span>
          </div>
          <button
            style={{ marginTop: 20 }}
            className="button"
            onClick={() =>
              this.props.purchaseButtonClicked(this.props.dataProps.id)
            }
          >
            Purchase
          </button>
        </div>
      </div>
    );
  }
}

export default ItemCard;
