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
      currentOperation: -1,
      currentDisplay:0,
      isChangeDisplay:false,
      isNegative:1,
    }
    
  }
  collectNumber(num) {
    if(this.state.isChangeDisplay) {
      this.setState({ 
        currentDisplay: num,
        isChangeDisplay: false,
      });
    }else {
      const newCNum = this.state.currentDisplay * 10 + num;
      this.setState({ currentDisplay: newCNum});
    }
  }

  collectOperator(operator) {
    
    if(this.state.currentOperation === -1){
      this.setState({
        currentOperation: operator,
        numberToOperate: this.state.currentDisplay,
        isChangeDisplay: true,
      });
    } else {
      this.calculate()
      this.setState({
        currentOperation: operator,
        isChangeDisplay : true,
      });

    }
  
  }

  calculate(){
    const math_it_up = {
      '+': function (x, y) { return x + y },
      '-': function (x, y) { return x - y },
      '÷': function (x, y) { return x / y},
      'x': function (x, y) { return x * y},
    };
    console.log(this.state.isNegative, "prev number")
    const prevNum = this.state.currentDisplay * this.state.isNegative;
    console.log(this.state.currentDisplay, "display number")
    const calcVal = math_it_up[this.state.currentOperation](this.state.numberToOperate, prevNum );
    console.log(calcVal);
    if (calcVal<0){
      this.setState({
        isNegative:-1
      })
    }else{
      this.setState(
        {isNegative:1}
      )
    }
    this.setState({
      currentDisplay: calcVal,
      numberToOperate: calcVal,
    });
  }
  
  reset() {
    this.setState({
      numberToOperate: 0,
      currentOperation: -1,
      currentDisplay:0,
      isChangeDisplay:false,
      isNegative:1,
    })
  }

  render() {
    return (
      <div className="calculator-container">
        <CalculatorDisplay curVal={this.state.currentDisplay} />
        <div className="clear-number-container">
          <ActionButton onClickFunction={this.reset.bind(this)} buttonStyle= "num-button" text="clear" />
          <NumbersContainer onClickFunction={this.collectNumber.bind(this)} />
        </div>
      <OperationsContainer onClickFunction={this.collectOperator.bind(this)} />
      </div>
    );    
  }

};


