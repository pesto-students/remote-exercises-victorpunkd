import React, { Component } from "react";
import "./Header.css";

export class Header extends Component {
  constructor() {
    super();
    this.state = {
      itemName: "",
    };
  }

  handleInputChange = (event) => {
    this.setState({ itemName: event.target.value });
  };

  render() {
    return (
      <>
        <div className="headerContainer">
          <div className="heading">Add Item</div>
          <div>
            <div>
              <input
                type="text"
                className="inputBox"
                value={this.state.itemName}
                onChange={this.handleInputChange}
              />
            </div>
            <button
              className="button"
              onClick={() => this.props.addItemClicked(this.state.itemName)}
            >
              Add Item
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default Header;
