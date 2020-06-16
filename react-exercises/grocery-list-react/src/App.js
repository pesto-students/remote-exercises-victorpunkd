import React, { Component } from "react";
import "./App.css";
import { Header } from "./Header/Header";
import { ItemCard } from "./ItemCard/Itemcard";
class App extends Component {
  constructor() {
    super();
    this.state = {
      groceryList: [
        {
          id: 1,
          name: "Rice",
          quantity: 1,
          alreadyBought: false,
        },
        {
          id: 2,
          name: "Bread",
          quantity: 1,
          alreadyBought: false,
        },
        {
          id: 3,
          name: "Milk",
          quantity: 1,
          alreadyBought: false,
        },
        {
          id: 4,
          name: "Sugar",
          quantity: 1,
          alreadyBought: false,
        },
      ],
    };
  }

  handleItemPurchaseClick = (itemId) => {
    let tempGroceryList = this.state.groceryList;
    for (let i = 0; i <= tempGroceryList.length; i++) {
      if (tempGroceryList[i].id === itemId) {
        tempGroceryList[i].alreadyBought = !tempGroceryList[i].alreadyBought;
        break;
      }
    }
    this.setState({ groceryList: tempGroceryList });
  };

  handleClearItem = () => {
    this.setState({ groceryList: [] });
  };

  handleAddItemClick = (itemName) => {
    if (
      itemName.trim() === "" ||
      itemName.length <= 0 ||
      itemName.length > 30
    ) {
      alert("Item name cant be blank and maximum 30 characters");
      return;
    }
    alert(itemName);
    let tempData = this.state.groceryList;
    for (let i = 0; i < tempData.length; i++) {
      if (tempData[i].name === itemName) {
        tempData[i].quantity++;
        this.setState({ groceryList: tempData }, () => {
          console.log(this.state.groceryList);
        });
        return;
      }
    }

    tempData.push({
      id: Date.now(),
      name: itemName,
      quantity: 1,
      alreadyBought: false,
    });
    this.setState({ groceryList: tempData });
  };
  render() {
    return (
      <div className="App">
        <div className="appContainer">
          <Header addItemClicked={this.handleAddItemClick} />
          <div className="appBody">
            <div>
              <button
                onClick={this.handleClearItem}
                className="button"
                style={{ marginTop: 20 }}
              >
                Clear List
              </button>
            </div>
            <div className="groceryItemList">
              {this.state.groceryList.map((data) => (
                <ItemCard
                  key={data.id}
                  dataProps={data}
                  purchaseButtonClicked={this.handleItemPurchaseClick}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
