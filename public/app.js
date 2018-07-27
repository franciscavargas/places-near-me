"use strict";

class App extends React.Component {
  searchPlace() {
    const placeBox = document.querySelector("#place_box");
    const placeToSearch = placeBox.value;
    console.log(placeToSearch);

    fetch("search", {
      method: "post",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(placeToSearch)
    })
      .then(res => res.json())
      .then(res => console.log(res));
  }

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
          <input id="place_box" type="text" name="my_address" />
          <input type="submit" onClick={this.searchPlace} value="Search" />
        </div>
        <div />
      </div>
    );
  }
}

let domContainer = document.querySelector("#app_container");
ReactDOM.render(<App />, domContainer);
