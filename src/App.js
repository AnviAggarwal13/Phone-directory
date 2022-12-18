import React, { Component } from "react";
import Header from './Header';
import './App.css';

class App extends Component {
  render() {
    let sub=[
      {
        id:1,
        name:"s",
        phone:"999999"
      },
      {
        id:2,
        name:"h",
        phone:"888888"
      }
    ]
    return (
      <>
       <Header />
        <button className="addBtn">Add</button>
        <div className="grid-container">
          <span className="grid-item name">Name</span><br />
          <span className="grid-item phone">Phone</span>
        </div>

        {/* <div className="grid-container">
          <span className="grid-item ">Srishti</span><br />
          <span className="grid-item ">999999</span>
        </div>

        <div className="grid-container">
          <span className="grid-item ">Shilpa</span><br />
          <span className="grid-item ">888888</span>
        </div> */}
        {
          sub.map(subs => {
            return <div key={subs.id} className="grid-container">
            <span className="grid-item">{subs.name}</span>
            <span className="grid-item">{subs.phone}</span>
            <span className="grid-item">
              <button className="deleteBtn">Delete</button>
            </span>
            </div>
          })
        }
      </>
    );
  }
}

export default App;
