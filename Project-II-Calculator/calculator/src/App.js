import React from 'react';
import './App.css';
import OperationsContainer from './components/ContainerComponents/OperationsContainer.js'
import NumbersContainer from './components/ContainerComponents/NumberContainer.js';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
const App = () => {
  return (
    <div className="calculator-container">
      <CalculatorDisplay curVal={0} />
      <div className="clear-number-container">
        <ActionButton buttonStyle= "num-button" text="clear" />
        <NumbersContainer />
      </div>
    <OperationsContainer />
    </div>
  );
};

export default App;
