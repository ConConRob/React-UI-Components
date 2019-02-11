import React from 'react';
import './App.css';
import OperationsContainer from './components/ContainerComponents/OperationsContainer.js'
import NumbersContainer from './components/ContainerComponents/NumberContainer.js';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numberToOperate: 0,
      selectingNumber: [0],
      currentOperation: null,
    }
    
  }
  collectNumber(num) {
    const newCNum = this.state.selectingNumber.concat(num);
    this.setState({selectingNumber: newCNum});
  }

  collectOperator(operator) {
    this.setState({currentOperation: operator}, () =>  console.log(this.state.currentOperation));
  }

  updateDisplay() {

  }

  render() {
    return (
      <div className="calculator-container">
        <CalculatorDisplay curVal={parseInt(this.state.selectingNumber.join(''))} />
        <div className="clear-number-container">
          <ActionButton buttonStyle= "num-button" text="clear" />
          <NumbersContainer collectNumber={this.collectNumber.bind(this)} />
        </div>
      <OperationsContainer collectOperator={this.collectOperator.bind(this)} />
      </div>
    );    
  }

};


