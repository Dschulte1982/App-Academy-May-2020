import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
      num1: "",
      num2: ""
    }
  }

  handleFirstNum = e => {
    console.log(e.target.value);
    this.setState({ num1: Number.parseInt(e.target.value) })
  }

  handleSecondNum = e => {
    console.log(e.target.value);
    this.setState({ num2: Number.parseInt(e.target.value) })
  }

  add = () => {
    console.log(this.state.result)
    return (
      this.setState({ result: (this.state.num1 + this.state.num2) })
    )
  }

  subtract = () => {
    return (
      this.setState({ result: (this.state.num1 - this.state.num2) })
    )
  }

  multiply = () => {
    return (
        this.setState({ result: (this.state.num1 * this.state.num2) })
    )
  }

  divide = () => {
    return (
        this.setState({ result: (this.state.num1 / this.state.num2) })
    )
  }

  clearInput = () => {
    return (
        this.setState({
            result: 0,
            num1: "",
            num2: ""
        })
    )
  }

  render() {
    const {num1, num2, result} = this.state;

    return (
      <div>
        <h1>Result: {result}</h1>
        <input type='number' onChange={this.handleFirstNum} value={num1} placeholder="First Number" />
        <input type='number' onChange={this.handleSecondNum} value={num2} placeholder="Second Number" />
        <br/>
        <button onClick={this.add}>+</button>
        <button onClick={this.subtract}>-</button>
        <button onClick={this.multiply}>*</button>
        <button onClick={this.divide}>/</button>
        <br/>
        <button onClick={this.clearInput}>Clear</button>
      </div>
    );
  }
}

export default Calculator;
