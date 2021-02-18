import React from "react";
import Child from "./Child";
class PageComponent extends React.Component {
  callback = (count) => {};

  render() {
    return (
      <div className="App">
        <Child parentCallback={this.callback} />
        <h2>count should be updated from child </h2>
      </div>
    );
  }
}

export default PageComponent;
