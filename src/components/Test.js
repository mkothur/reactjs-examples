import React from "react";
import axios from "axios";

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: []
    };
  }
  // async componentDidMount() {
  //   const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  //   const data = await response.json();
  //   this.setState({ persons: data });
  // }
  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      const persons = res.data;
      this.setState({ persons });
    });
  }
  render() {
    return (
      <ul>
        {this.state.persons.map((person) => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>
    );
  }
}

export default Test;
