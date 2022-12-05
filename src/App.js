import React, { Component } from "react";
class App extends Component {
  render() {
    return (
      <>
        {/* <div className="header">
          Phone Directory
        </div>
        <button>Add</button>
        <div>
          <span>Name</span><br />
          <span>Phone</span>
        </div> */}
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" placeholder="Type here" defaultValue={"Anvi"}/>
      </>
    );
  }
}

export default App;
