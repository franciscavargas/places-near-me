"use strict";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>📍 Places near me</h1>
        <h2>
          Search for a place by name and return the recommended or popular
          venues near that location
        </h2>
        <p>Enter address</p>
        <div>
          <input type="text" name="my_address" />
          <input type="submit" value="Search" />
        </div>
        <div />
      </div>
    );
  }
}

let domContainer = document.querySelector("#app_container");
ReactDOM.render(<App />, domContainer);
