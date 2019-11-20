// create a method called setState that updates the current state of the class

// DONT need to write your own tests for this stretch

class StatefulThing {
  constructor(initialState = {}) {
    this.state = initialState;
  }
  setState() {
    // YOUR CODE
    let newState = initialState
    this.setState({initialState: newState});
  }
  render() {
    return (
      <div>{this.state.initialState}</div>
    )
  }
}

module.exports = { StatefulThing };
