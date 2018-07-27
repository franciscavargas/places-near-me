"use strict";

class App extends React.Component {
  render() {
    return <h1>📍 Places near me</h1>;
  }
}

let domContainer = document.querySelector("#app_container");
ReactDOM.render(<App />, domContainer);
