import React from "react";

class MyComponent extends React.Component {
  handleSubmit = () => {
    console.log("Input value:", this.input.value);
  };
  render() {
    return (
      <form onSumbit={this.handleSubmit}>
        <input type="text" ref={(input) => (this.input = input)} />
        <button type="submit"> Submit </button>
      </form>
    );
  }
}

export default MyComponent;
